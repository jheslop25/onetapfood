<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ingredientsController extends Controller
{
    public function getAllIngredients(){
        // a function that returns a list of all ingredients in storage
    }

    public function searchIngredients(){
        // a function that taks in a query and finds an ingredient record from the DB
        //this is an end point ment for ajax requests
    }

    public function updateIngredient(){
        // a function to update an ingredient record meant for updating storage amounts etc
    }

    public function destroyIngredient(){
        //remove an ingredient from the storage records
    }
}
