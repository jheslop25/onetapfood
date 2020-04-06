<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
        //this is where we will build the marketing/home page
    }

    public function onboarding(){
        //this will return the onboarding sequence
        return view('onboard');
    }

    public function mainApp(){
        //return the main vue app. this will return the dashboard. this may or may not include the ordering process
        return view('main');
    }

    public function CookingApp(){
        // this will return the cooking view
        return view('cooking');
    }

    public function store(){
        return view('store');
    }

    public function service(){
        return view('service');
    }

    public function test(){
        $msg = 'this test worked';
        return response()->json(['message'=>$msg]);
    }

    public function post(Request $request){
        return response()->json(['input' => $request->input]);
    }

    public function devInt(){
        return view('development.interface');
    }
}
