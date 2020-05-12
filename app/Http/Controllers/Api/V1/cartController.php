<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class cartController extends Controller
{
    public function addList(Request $request)
    {
        //add an array of items to cart
        if (Auth::check()) {
            $items = $request->input;
            foreach ($items as $item) {
                $cart = new \App\Cart();
                $cart->user_id = $request->user()->id;
                $cart->ingredient_name = $item['name'];
                $cart->quantity = $item['amount'];
                $cart->unit = $item['unit'];
                $cart->save();
            }
            return response()->json(['msg' => 'it probably, maybe worked... who knows, right? check the DB'], 200);
        } else {
            return response()->json(['msg' => 'please login'], 200);
        }
    }

    public function getCart(Request $request)
    {
        //get user's cart
        if (Auth::check()) {
            $cart = \App\Cart::where('user_id', $request->user()->id)->get();

            return response()->json(['cart' => $cart]);
        } else {
            return response()->json(['msg' => 'please login'], 200);
        }
    }

    public function emptyCart(Request $request)
    {
        //empty the user's cart
        if (Auth::check()) {
            \App\Cart::where('user_id', $request->user()->id)->delete();
            return response()->json(['msg' => 'cart empty'], 200);
        } else {
            return response()->json(['msg' => 'please login'], 200);
        }
    }
}
