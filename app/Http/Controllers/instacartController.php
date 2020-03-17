<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;


class instacartController extends Controller
{

    public function __construct()
    {
        $this->baseURL = 'https://cat-fact.herokuapp.com';
        $this->cookieSessionName = "_instacart_session";
        $this->client = new Client([
            'base_uri' => $this->baseURL,
            'timeout' => 2.0
        ]);
    }


    public function login(Request $request){
        $this->iCartEmail = $request->instacartEmail;
        $this->iCartPass = $request->instacartPassword;

        $response = $this->client->request('GET', '/facts');

        $body = $response->getBody();

        echo $body;

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

