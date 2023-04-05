<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Dish;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    //
    public function AddProduct(Request $request) {
            $validator = Validator::make($request->all(),[
                'dish_id'=>'required|string',
                'quantity'=>'required|integer|min:1',
            ]);
             if ($validator->fails()) {
                         return response()->json([
                             'status' => 'error',
                             'message' => $validator->errors()
                         ], 400);
             }
             $dish = Dish::find($request->input('dish_id'));
             if($dish){
                 if($dish->quantity < $request->input('quantity')){
                    return response()->json(['status' => 'error', 'message' => 'exceed'], 400);
                 }
             }else{
                return response()->json(['status' => 'error', 'message' => 'product not found'], 404);
             }
            $id = Auth::id();
             $isAdded = Cart::where([['user_id',"=",$id],['dish_id','=',$request->input('dish_id')]])->first();
             if($isAdded){
                 $dish->quantity -= $request->input('quantity');
                 $dish->save();
                 $isAdded->quantity += $request->input('quantity');
                 $isAdded->save();
                 return response()->json(['status' => 'success', 'message' => 'Product added' , 'data'=>$isAdded], 200);
             }
            $cart = new Cart([
                "user_id"=>$id,
                "dish_id"=>$request->input('dish_id'),
                "quantity"=>$request->input('quantity'),
            ]);

            $cart->save();
            return response()->json(['status' => 'success', 'message' => 'Product Added' , 'data'=>$cart], 200);
    }
   public function index() {
       $id = Auth::id();
//       $cart = Cart::where('user_id','=',$id)->get();
       $cart = DB::table('dishes')
           ->join('carts', 'carts.dish_id', '=', 'dishes.id')->where("user_id","=",$id)->get();
        return response()->json(['status' => 'success', 'data' => $cart], 200);
   }
   public function UpdateQuantity(Request $request) {
       $id = Auth::id();
       $validator = Validator::make($request->all(),[
           'cart_id' => 'required|exists:carts,id',
           'quantity'=>'required|integer|min:1',
       ]);
       if ($validator->fails()) {
           return response()->json([
               'status' => 'error',
               'message' => $validator->errors()
           ], 400);
       }
      $cart = Cart::find($request->cart_id)->first();
       $cart->quantity = $request->quantity;
       $cart->save();
       return response()->json(['status' => 'success', 'data' => $cart], 200);
   }
    public function UpdateChecked(Request $request) {
        $id = Auth::id();
        $validator = Validator::make($request->all(),[
            'cart_id' => 'required|exists:carts,id',
            'isChecked'=>'required|boolean',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()
            ], 400);
        }
        $cart = Cart::find($request->cart_id)->first();
        $cart->isChecked = $request->isChecked;
        $cart->save();
        return response()->json(['status' => 'success', 'data' => $cart], 200);
    }

}
