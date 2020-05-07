<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;

class registerController extends Controller
{
    public function create(Request $request)
    {
        if ($request->validate([
            'name' => 'required|string',
            'email' => 'required|string',
            'password' => 'required|min:6|string',
            'type' => 'required|string',
            'status' => 'required|string',
        ])) {
            if ($user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'user_type' => $request->type,
                'status' => $request->status,
                'location' => $request->location
            ])){
                return response()->json(['msg' => 'success', 'user' => $user], 200);
            } else {
                return response(['msg' => 'something went wrong'],500);
            }

        } else {
            return response(['msg' => 'validation failed'],400);
        }
    }
}
