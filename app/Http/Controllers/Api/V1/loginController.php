<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use Laravel\Passport\Token;
class loginController extends Controller
{
    public function login(Request $request){
        $login = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        if (!Auth::attempt($login)){
            return response(['msg' => 'invalid cred']);
        } 
        
        $accessToken = Auth::user()->createToken('authToken');
        
        return response(['user' => Auth::user(), 'access_token' => $accessToken]);
    }

    public function logout(Request $request){ // may need to refactor
        if($request->validate([
            'userID' => 'required'
        ])){
            Token::where('user_id', $request->userID)->delete();
            return response(['msg' => 'you have logged out'], 200);
        } else {
            return response(['msg' => 'logout failed'], 400);
        }
    }

    public function users(Request $request){
        return User::all();
    }
}
