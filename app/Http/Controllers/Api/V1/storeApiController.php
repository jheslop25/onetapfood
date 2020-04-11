<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\RequestStack;

class storeApiController extends Controller
{
    public function getOrders(Request $request){
        // a function to check for new orders
        if(Auth::check() && $request->user()->type == 'vend'){
            $orders = \App\Order::where('vendor_id', $request->user()->id);

            return response()->json(['orders'=> $orders], 200);
        } else {
            return response()->json(['msg'=>'unauthorized user'], 401);
        }
    }

    public function confirmOrder(Request $request){
        // a function to confirm an order
        if(Auth::check() && $request->user()->type == 'vend'){
            $order = \App\Order::find($request->input['order_id']);
            $order->status = 'confirmed';
            $order->save();
            return response()->json(['msg'=> 'order confirmed'], 200);
        } else {
            return response()->json(['msg'=>'unauthorized user'], 401);
        }
    }

    public function cancelOrder(Request $request){
        //a function to cancel an order
        if(Auth::check() && $request->user()->type == 'vend'){
            $order = \App\Order::find($request->input['order_id']);
            $order->status = 'canceled - vendor';
            $order->save();
            return response()->json(['msg'=> 'order canceled'], 200);
        } else {
            return response()->json(['msg'=>'unauthorized user'], 401);
        }
    }

    public function modifyOrder(Request $request){
        //a function to modify an order
        if(Auth::check() && $request->user()->type == 'vend'){
            $order = \App\Order::find($request->input['order_id']);
            $order->status = 'modified';
            $order->updates = $request->input['updates'];
            $order->save();
            return response()->json(['msg'=> 'order modified'], 200);
        } else {
            return response()->json(['msg'=>'unauthorized user'], 401);
        }
    }

    public function fillOrder(Request $request){
        // a function to fill an order
        if(Auth::check() && $request->user()->type == 'vend'){
            $order = \App\Order::find($request->input['order_id']);
            $order->status = 'filled';
            $order->save();
            return response()->json(['msg'=> 'order filled'], 200);
        } else {
            return response()->json(['msg'=>'unauthorized user'], 401);
        }
    }

    public function setStatus(Request $request){
        //a function to set store status
        if(Auth::check() && $request->user()->type == 'vend'){
            //set user status
        } else {
            return response()->json(['msg'=>'unauthorized user'], 401);
        }
    }
}
