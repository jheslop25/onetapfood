<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class serviceController extends Controller
{
    public function makeComplaint(){
        // a function for filling a service ticket
    }

    public function cancelComplaint(){
        // a function for cancelling a complaint
    }

    public function getComplaint(){
        // a function for getting a complaint by ID -- meant for service interface
    }

    public function resolve(){
        //a function for resolving complaint
    }

    public function update(){
        //a function for updating a complaint
    }

    public function getList(){
        // a function for getting all complaints by date
    }
}
