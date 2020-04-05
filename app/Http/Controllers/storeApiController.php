<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\RequestStack;

class storeApiController extends Controller
{
    public function getOrders(Request $request){
        // a function to check for new orders
    }

    public function confirmOrder(Request $request){
        // a function to confirm an order
    }

    public function cancelOrder(Request $request){
        //a function to cancel an order
    }

    public function modifyOrder(Request $request){
        //a function to modify an order
    }

    public function fillOrder(Request $request){
        // a function to fill an order
    }

    public function setStatus(Request $request){
        //a function to set store status
    }
}
