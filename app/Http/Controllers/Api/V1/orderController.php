<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class orderController extends Controller
{
    public function createOrder(Request $request)
    {
        // a function that allows the consumer/front end to create an order
        if (Auth::check()) {
            $order = new \App\Order();
            $order->user_id = $request->user()->id;
            $order->cart_id = $request->input['cart'];
            $order->content = $request->input['content']; //send valid json string
            $order->vendor_id = $request->input['vend'];
            $order->status = 'new';
            $order->save();

            return response()->json(['msg' => 'order created'], 200);
        } else {
            return response()->json(['msg' => 'please login'], 200);
        }
        //add some trigger here to notify store
    }

    public function cancelOrder(Request $request)
    {
        // a fucntion for the user to cancel thier order
        if (Auth::check()) {
            $order = \App\Order::where('user_id', $request->user()->id)->get();
            $order->status = 'canceled';
            $order->save();

            return response()->json(['msg' => 'order canceled'], 200);
        } else {
            return response()->json(['msg' => 'please login'], 200);
        }
    }

    public function updateOrder(Request $request)
    {
        // a function for the user to update their order
        if (Auth::check()) {
            $order = \App\Order::where('user_id', $request->user()->id)->get();
            $order->status = 'updated';
            $order->content = $request->input['content'];
            $order->save();
        } else {
            return response()->json(['msg' => 'please login'], 200);
        }
    }

    public function getById(Request $request)
    {
        if (Auth::check()) {
            $order = \App\Order::find($request->user()->id);
            return response()->json(['order' => $order], 200);
        } else {
            return response()->json(['msg' => 'please login'], 200);
        }
    }

    public function getByStatus(Request $request)
    {
        if (Auth::check()) {
            $order = \App\Order::where('user_id', $request->user()->id)->where('status', $request->input['status'])->get();
            return response()->json(['order' => $order], 200);
        } else {
            return response()->json(['msg' => 'please login'], 200);
        }
    }
}

