<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
//use GuzzleHttp\RequestOptions;


class instacartController extends Controller
{

    public function __construct()
    {
        $this->baseURL = 'https://www.instacart.ca';
        $this->cookieSessionName = "_instacart_session";
        $this->iCartEmail = '';
        $this->iCartPass = '';
        $this->default_store = 'Real Canadian Super Store';
        $this->client = new Client([
            'base_uri' => $this->baseURL,
            'timeout' => 2.0
        ]);
    }


    public function login(Request $request){
        $this->iCartEmail = $request->instacartEmail;
        $this->iCartPass = $request->instacartPassword;

        $response = $this->client->request('GET', '/');

        $body = $response->getBody();

        // import guzzle and create http request to instacart
        return view('development.interface',['body' => $body]);
    }

    public function search(Request $request){
        //search API based on request
    }

    public function AddAllToCart(Request $request){
        //add all ingredients to cart
    }
}

