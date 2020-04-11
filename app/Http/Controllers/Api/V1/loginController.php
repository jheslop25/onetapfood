<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
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

    public function users(Request $request){
        return User::all();
    }
}
