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
    }

    public function mainApp(){
        //return the main vue app
    }
    public function devInt(){
        return view('development.interface');
    }

    public function test(){
        $msg = 'this test worked';
        return response()->json(['message'=>$msg]);
    }

    public function post(Request $request){
        return response()->json(['input' => $request->input]);
    }
}
