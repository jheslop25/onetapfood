<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class orderController extends Controller
{
    public function createOrder(Request $request){
        // a function that allows the consumer/front end to create an order
        $order = new \App\Order();
        $order->user_id = $request->user()->id;
        $order->cart_id = $request->input['cart'];
        $order->content = $request->input['content']; //send valid json string
        $order->status = 'new';
        $order->save();

        return response()->json(['msg'=>'order created'], 200);
        //add some trigger here to notify store
    }

    public function cancelOrder(Request $request){
        // a fucntion for the user to cancel thier order
        $order = \App\Order::where('user_id', $request->user()->id)->get();
        $order->status = 'canceled';
        $order->save();

        return response()->json(['msg'=> 'order canceled'], 200);
    }

    public function updateOrder(Request $request){
        // a function for the user to update their order
        $order = \App\Order::where('user_id', $request->user()->id)->get();
        $order->status = 'updated';
        $order->content = $request->input['content'];
        $order->save();
    }

    public function getById(Request $request){
        $order = \App\Order::find($request->user()->id);
        return response()->json(['order'=> $order], 200);
    }
}
