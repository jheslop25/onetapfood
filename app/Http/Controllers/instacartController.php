<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class instacartController extends Controller
{
    public function login(Request $request){
        $this->iCartEmail = $request->email;
        $this->iCartPass = $request->password;
        // import guzzle and create http request to instacart
    }
}
