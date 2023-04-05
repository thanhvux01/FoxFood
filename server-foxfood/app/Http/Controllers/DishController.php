<?php

namespace App\Http\Controllers;

use App\Models\Dish;
use App\Utils\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DishController extends Controller
{
    //
    public function index() {
           $dish = Dish::all();
//          $dish->description = "not good";
            if($dish){
               return  response()->json(['status' => 'success', 'data' => $dish], 200);
            }
           return response()->json(['status' => 'error', 'message' => 'not found'], 404);
    }
    public function AddDish(Request $request) {
        $validated = Validator::make($request->all(), ['name' => 'required|string|max:50','quantity'=>'required|integer','price'
        =>'required|numeric']);
        if($validated->fails()){
            return response()->json([new Response(400, "Invalid Request"), 400]);
        }else{
            $dish = new Dish(['name'=>$request->name,'quantity'=>$request->quantity,'description'=>$request->description,'price'=>$request->price,
            'image'=>$request->input('image')]);
            $dish->save();
            return response()->json([new Response(200, "Success")]);
        }
    }

    public function DeleteDish($id) {
       $dish = Dish::find($id);
       if(isset($dish)){
            $dish->delete();
           return response()->json([new Response(200, "Delete Success")]);
       }else{
          return response()->json([new Response(404, "Dish not found"), 404]);
       }
    }
    public function UpdateDish(Request $request,$id) {
        $dish = Dish::find($id);
        if(isset($dish)){
            $validated = Validator::make($request->all(), ['name' => 'required|string|max:50','quantity'=>'required|integer','price'
            =>'required|numeric',$request->description=>"nullable"]);
            if($validated->fails()){
                return response()->json([new Response(400, "Invalid Request"), 400]);
            }else{
                $dish->name = $request->name;
                $dish->quantity = $request->quantity;
                $dish->price = $request->price;
                $dish->description = $request->description;
                $dish->save();
                return response()->json([new Response(200, "Update Success")]);
            }
        }else{
            return response()->json([new Response(404, "Dish not found"), 404]);
        }
    }

}
