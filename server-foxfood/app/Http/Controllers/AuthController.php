<?php

namespace App\Http\Controllers;

use App\Models\Dish;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function Login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|string',
            'password' => 'required|string',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()
            ], 400);
        }

        $user = User::where('username',$request['username'])->first();
        if($user){
            if(Hash::check($request['password'],$user->password)){
//               if($user->tokens()->get()){
//                   $user->tokens()->delete();
//               }
                $token = $user->createToken('API_TOKEN')->plainTextToken;
                return response()->json(['message' => 'Login Success','token'=>$token], 200)->withCookie('fox_token',$token,24*60);
            };
            return response()->json(['message' => 'Password or Email is incorrect'], 401);
        }
        return response()->json(['message' => 'Password or Email is incorrect'], 401);
    }
    //
    public function Register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|unique:users',
            'password' => 'required',
            'email' => 'required|email|unique:users',
            'birthday' => 'required|date',
            'gender' => 'in:male,female,other',
            'number' => 'required|string|min:10|unique:users',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()
            ], 400);
        }

        $user = new User();
        $user->username = $request->input('username');
        $user->password = bcrypt($request->input('password'));
        $user->birthday = $request->input('birthday');
        $user->last_name = $request->input('lastname');
        $user->first_name = $request->input('firstname');
        $user->email = $request->input('email');
        $user->gender = $request->input('gender');
        $user->number = $request->input('number');

        $user->save();
        $token = $user->createToken('API_TOKEN')->plainTextToken;

        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'data' => $user,
            'token' => $token
        ], 201);
    }
    public function Checking(Request $request) {

        return  Auth::user();;
    }
}
