<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class instacartController extends Controller
{
    public function login(Request $request){
        $this->iCartEmail = $request->instacartEmail;
        $this->iCartPass = $request->instacartPassword;
        // import guzzle and create http request to instacart
    }

    public function search(Request $request){
        //search API based on request
    }

    public function AddAllToCart(Request $request){
        //add all ingredients to cart
    }
}

