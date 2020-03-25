<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ingredientsController extends Controller
{
    public function getAllIngredients()
    {
        // a function that returns a list of all ingredients in storage for the logged in user
        if (Auth::check()) {
            $ingredients = new \App\Ingredient();
            $storage = $ingredients->where('user_id', Auth::user()->id)->get();
            return response()->json($storage);
        }
    }

    public function createIngredient(Request $request)
    {
        if (Auth::check()) {
            $prams = json_decode($request);
            $ingredient = new \App\Ingredient();
            //insert variables into ingredient model here
            $ingredient->save();
            $msg = 200;
            return response()->json(['status' => $msg]);
        }
    }

    public function searchIngredients(Request $request)
    {
        // a function that taks in a query and finds an ingredient record from the DB
        if(Auth::check()){
            $id = $request->id;
            $ingredient = \App\Ingredient::find($id);
            return response()->json(['ingredient' => $ingredient]);
        }
    }

    public function updateIngredient(Request $request)
    {
        // a function to update an ingredient record meant for updating storage amounts etc
        if(Auth::check()){
            $id = $request->id;
            $ingredient = \App\Ingredient::find($id);
            //update values
            $ingredient->save();
            $msg = 200;
            return response()->json(['status' => $msg]);
        }
    }

    public function destroyIngredient(Request $request)
    {
        //remove an ingredient from the storage records
        if(Auth::check()){
            $id = $request->id;
            $ingredient = \App\Ingredient::find($id);
            $ingredient->delete();
            $msg = 200;
            return response()->json(['status' => $msg]);
        }
    }
}
