<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Dish;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Utils\Response;
class CategoryController extends Controller
{
    //
    public function index()
    {
        $cate = Category::all();
        if ($cate->count() > 0) {
            return response()->json(new Response(200, $cate), 200);
        } else {
            return response()->json(new Response(404, "No Category found"), 404);
        }
    }

    public function create(Request $request)
    {
        $validated = Validator::make($request->all(), ['name' => 'required|string|max:255']);
        if ($validated->fails()) {
            return response()->json([new Response(400, "Invalid Request"), 400]);
        } else {
            $category = Category::create([
                'name' => $request->name
            ]);
            if ($category) {
                return response()->json(new Response(200, "Successfully Created "), 200);
            } else {
                return response()->json(new Response(400, "Can't create"), 400);
            }
        }
    }
   public function AddCategory (Request $request) {
        $validated =Validator::make($request->all(),['dish_id'=>'required|integer']);
        if($validated->fails()){
            return response()->json(new Response(400, "Invalid Request"),400);
        }else{
            $dish = Dish::find($request->dish_id);
            $category = Category::find($request->category_id);
            if($dish->count() > 0 && $category->count() > 0) {
               $dish->categories()->save($category);
                return response()->json(new Response(200, "Create Successfully"), 200);
            }else{
                return response()->json(new Response(400, "Dish or Category is not valid"), 400);
            }
        }
   }
   public function SortCategory($id){
          if(isset($id)){
              $category = Category::find($id);
              if(isset($category)) {
                 return response()->json(['status' => 'success', 'data' => $category::find($id)->toManyDishes()->get()], 200);
              }else{
                  return response()->json(new Response(404, "Id not found"), 404);
              }
          }else{
              return response()->json(new Response(400, "Id fail"), 400);
          }
   }

}
