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
        //$this->middleware('auth');
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

    public function vendorCreate(){
        return view('vendorSignup');
    }


    // SPA delivery
    public function mainApp(){
        //return the main vue app. this will return the dashboard. this may or may not include the ordering process
        return view('main');
    }

    public function serviceApp(){
        //retrun the service SPA
        return view('service');
    }

    public function vendorApp(){
        //return the vendor app
        return view('vendor');
    }
}
