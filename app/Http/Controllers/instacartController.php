<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
//use GuzzleHttp\RequestOptions;


class instacartController extends Controller
{

    public function __construct()
    {
        $this->baseURL = 'https://www.instacart.com';
        $this->cookieSessionName = "_instacart_session";
        $this->iCartEmail = '';
        $this->iCartPass = '';
        $this->default_store = 'Real Canadian Super Store';

    }


    public function login(Request $request){
        $this->iCartEmail = $request->instacartEmail;
        $this->iCartPass = $request->instacartPassword;

        $client = Http::post($this->baseURL . '/accounts/login', [
            'user' => [
                'email' => $this->iCartEmail,
                'password' => $this->iCartPass
            ]
        ]);

        //$body = $response->getBody();

        // import guzzle and create http request to instacart
        return view('development.interface',['body' => $client->status()]);
    }

    public function search(Request $request){
        //search API based on request
    }

    public function AddAllToCart(Request $request){
        //add all ingredients to cart
    }

    public function setAddress(){
        // a function to set delivery address
    }

    public function checkout(){
        // a function to process order
    }
}

