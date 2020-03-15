<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;


class instacartController extends Controller
{
    protected $baseURL = 'https://www.instacart.ca';

    protected $cookieSessionName = "_instacart_session";


    public function login(Request $request, $baseURL){
        $this->iCartEmail = $request->instacartEmail;
        $this->iCartPass = $request->instacartPassword;

        $client = new Client([
            'base_uri' => $baseURL,
            'timeout' => 2.0
        ]);

        // import guzzle and create http request to instacart
        return view('development.interface');
    }

    public function search(Request $request){
        //search API based on request
    }

    public function AddAllToCart(Request $request){
        //add all ingredients to cart
    }
}

