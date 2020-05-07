<?php


namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Collection;
use App\Ingredient;

class ingredientsController extends Controller
{
    public function getAllIngredients(Request $request)
    {
        
        // // a function that returns a list of all ingredients in storage for the logged in user
        if (Auth::check()) {
            $ingredients = \App\Ingredient::where('user_id', $request->user()->id)->get();


            $final = $ingredients->groupBy('spoon_id');

            $queries = [];
            foreach($final as $spoon){
                array_push($queries, $spoon[0]->ingredient_name);
            }
            return response()->json(['ingred' => $queries], 200);
        } else {
            return response()->json(['msg' => 'please login'], 200);
        }
    }

    public function createIngredient(Request $request)
    {
        if (Auth::check()) {
            Ingredient::where('user_id', $request->user()->id)->delete();

            $ingredients = $request->input[0];
            foreach ($ingredients as $item) {
                $ingredient = new \App\Ingredient();
                //insert variables into ingredient model here
                $ingredient->user_id = $request->user()->id;
                $ingredient->ingredient_name = $item['name'];
                $ingredient->spoon_id = $item['id'];
                $ingredient->unit = $item['unit'];
                $ingredient->quantity = $item['amount'];
                $ingredient->photo_URL = $item['image'];
                $ingredient->save();
            }
            return response()->json(['status' => 'it probably worked, but who knows...'], 200);
        } else {
            return response()->json(['msg' => 'please login'], 200);
        }
    }

    public function searchId(Request $request)
    {
        // a function that taks in a query and finds an ingredient record from the DB
        if (Auth::check()) {
            $id = $request->input['id']; // may need to change this to json_decode()
            $ingredient = \App\Ingredient::find($id);
            return response()->json(['ingredient' => $ingredient], 200);
        } else {
            return response()->json(['msg' => 'please login'], 200);
        }
    }

    public function searchName(Request $request)
    {
        if (Auth::check()) {
            $ingredient = \App\Ingredient::where('ingredient_name', $request->input['name'])->get();
            return response()->json(['results' => $ingredient], 200);
        } else {
            return response()->json(['msg' => 'please login'], 200);
        }
    }

    public function updateIngredient(Request $request)
    {
        // a function to update an ingredient record meant for updating storage amounts etc
        if (Auth::check()) {
            $params = $request->input;
            $id = $params['id'];
            $ingredient = \App\Ingredient::find($id);
            //update values
            $ingredient->user_id = $request->user()->id;
            $ingredient->ingredient_name = $params['name'];
            $ingredient->unit = $params['unit'];
            $ingredient->quantity = $params['quantity'];
            $ingredient->photo_URL = $params['photo'];
            $ingredient->save();
            $msg = 200;
            return response()->json(['status' => $params], 200);
        } else {
            return response()->json(['msg' => 'please login'], 200);
        }
    }

    public function destroyIngredient(Request $request)
    {
        //remove an ingredient from the storage records
        if (Auth::check()) {
            $id = $request->input['id'];
            $ingredient = \App\Ingredient::find($id);
            $ingredient->delete();
            return response()->json(['status' => 'deletion worked'], 200);
        } else {
            return response()->json(['msg' => 'please login'], 200);
        }
    }
}
