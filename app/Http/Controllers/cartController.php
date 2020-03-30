<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class cartController extends Controller
{
    public function addList(Request $request){
        //add an array of items to cart
        if (Auth::check()){
            $items = $request->items;
            foreach($items as $item){
                $cart = new \App\Cart();
                $cart->user_id = Auth::user()->id;
                $cart->ingredient_name = $item->name;
                $cart->quantity = $item->quant;
                $cart->unit = $item->unit;
                $cart->save();
            }

        }
    }

    public function getCart(Request $request){
        //get user's cart
        if (Auth::check()){
            $cart = \App\Cart::find(Auth::user()->id);

            return response()->json(['cart' => $cart]);
        }
    }

    public function emptyCart(){
        //empty the user's cart
    }
}
