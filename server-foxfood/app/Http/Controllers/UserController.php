<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class UserController extends Controller
{
    //
    public function index() {
        $user = Auth::user();
        if($user){
           return response()->json(['status' => 'success', 'data' => $user , 'message'=>'Get info success'], 200);
        }
        return response()->json(['status' => 'error', 'message' => 'time out'], 401);
    }
    public function DeleteUser
    ($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json([
                'status' => 'error',
                'message' => 'User not found'
            ], 404);
        }

        $user->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'User deleted successfully'
        ], 200);
    }
}
