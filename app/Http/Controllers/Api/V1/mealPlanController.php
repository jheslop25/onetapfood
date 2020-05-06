<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;


class mealPlanController extends Controller
{
    public function getAllMeals(Request $request)
    {
        // a function that returns the whole meal plan stored in the DB
        // if no current record then return a json object that prompts the client to create one
        if (Auth::check()) {
            $meals = [];
            
            $breakfast = \App\Meal::where('user_id', $request->user()->id)->where('type', 'breakfast')->orderBy('sched_date', 'desc')->get();
            $lunch = \App\Meal::where('user_id', $request->user()->id)->where('type', 'lunch')->orderBy('sched_date', 'desc')->get();
            $supper = \App\Meal::where('user_id', $request->user()->id)->where('type', 'supper')->orderBy('sched_date', 'desc')->get();
            array_push($meals, $breakfast);
            array_push($meals, $lunch);
            array_push($meals, $supper);

            if(sizeof($breakfast) > 0){
                return response()->json(['meals'=> $meals, 'show' => true], 200);
            } elseif (sizeof($meals) <= 0){
                return response()->json(['meals'=> $meals, 'show' => false], 200);
            }
        } else {
            return response()->json(['msg' => 'please login', 'show' => false], 200);
        }
    }

    public function storeMealPlan(Request $request)
    {
        // a function that stores a meal plan in the DB. we'll build the meal plan with js on client.
        if (Auth::check()) {
            //delete old meal plan
            \App\Meal::where('user_id', $request->user()->id)->delete();

            //add new meal plan
            $meals = $request->input;
            foreach($meals as $meal){
                $record = new \App\Meal();
                $record->user_id = $request->user()->id;
                $record->spoon_id = $meal['id'];
                $record->type = $meal['type'];
                $record->sched_date = $meal['date'];
                $record->save();
            }
                
            return response()->json(['msg' => 'it worked... I think'], 200);
        } else {
            return response()->json(['msg' => 'please login'], 200);
        }
    }

    public function updateMealPlan(Request $request)
    {
        // a function that updates a meal plan record typically to add or remove a meal.
        if (Auth::check()) {
            $params = $request->input;
            $meal = \App\Meal::find($params['id']);
            $meal->user_id = $request->user()->id;
            $meal->title = $params['title'];
            $meal->ingredients_array = $params['ingredients'];
            $meal->instructions = $params['instructions'];
            $meal->photo_URL = $params['photo'];
            $meal->type = $params['type'];
            $meal->sched_date = $params['date'];
            $meal->save();
            return response()->json(['msg' => $params], 200);
        } else {
            return response()->json(['msg' => 'please login'], 200);
        }
    }
}
