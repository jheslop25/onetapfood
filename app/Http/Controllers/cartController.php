<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class cartController extends Controller
{
    public function addList(Request $request){
        //add an array of items to cart
            $items = $request->input;
            foreach($items as $item){
                $cart = new \App\Cart();
                $cart->user_id = $request->user()->id;
                $cart->ingredient_name = $item['name'];
                $cart->quantity = $item['quant'];
                $cart->unit = $item['unit'];
                $cart->save();
            }
            return response()->json(['req' => $items], 200);
    }

    public function getCart(Request $request){
        //get user's cart
            $cart = \App\Cart::where('user_id', $request->user()->id)->get();

            return response()->json(['cart' => $cart]);
    }

    public function emptyCart(Request $request){
        //empty the user's cart
        \App\Cart::where('user_id', $request->user()->id)->delete();
        return response()->json(['msg'=>'cart empty'], 200);
    }
}
