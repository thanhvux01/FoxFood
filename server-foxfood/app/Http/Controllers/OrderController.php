<?php

namespace App\Http\Controllers;

use App\Models\Dish;
use App\Models\Order;
use App\Utils\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{
    //
    public function MakeOrder (Request $request) {
        $validator = Validator::make($request->all(), ['description' => 'string|max:255','address'=>'required|string|max:255','dishes'=>'required|array','dishes.*.dish_id'
        =>['required','exists:dishes,id'],'dishes.*.quantity' => ['required','numeric'
            ,function($atr,$value,$fail) use ($request){
                $numericString = preg_replace("/[^0-9]/", "", $atr);
                $dish = Dish::find($request->dishes[$numericString]['dish_id']);
                if($dish->quantity < $value ){
                    $fail('Exceed quantity');
                };
            }
        ] ]) ;
        if ($validator->fails()) {
            return response()->json([new Response(400, $validator->errors()), 400]);
        }
        $id = Auth::id();
        $order = new Order();
        $order->address = $request->input('address');
        $order->description = $request->input('description');
        $order->user_id = $id;
        $order->save();
        $dishArray = $request->dishes;
        $dishIds = array_map(function ($item){
            return $item['dish_id'];
        },$dishArray);
        $i = 0;
        foreach ($dishIds as $id){
            $dish = Dish::find($id);
            $order->dishes()->attach($dish,['quantity'=>$request->dishes[$i]['quantity'],'price'=>$dish->price]);
            $i++;
        }
        return response()->json(['status' => 'success', 'data' => $order], 200);

    }

}
