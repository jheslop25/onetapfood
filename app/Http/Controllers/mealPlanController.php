<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class mealPlanController extends Controller
{
    public function getAllMeals(Request $request)
    {
        // a function that returns the whole meal plan stored in the DB
        // if no current record then return a json object that prompts the client to create one
        if (Auth::check()) {
            $params = $request->input;
            $meals = \App\Meal::where('user_id', $request->user()->id)->orderBy('created_at', 'desc')->get();
            return response()->json(['meals'=> $meals], 200);
        } else {
            return response()->json(['msg' => 'please login'], 200);
        }
    }

    public function storeMealPlan(Request $request)
    {
        // a function that stores a meal plan in the DB. we'll build the meal plan with js on client.
        if (Auth::check()) {
            $mealPlan = $request->input;
            foreach ($mealPlan as $meal) {
                $record = new \App\Meal();
                $record->user_id = $request->user()->id;
                $record->title = $meal['title'];
                $record->ingredients_array = $meal['ingredients'];
                $record->instructions = $meal['instructions'];
                $record->photo_URL = $meal['photo'];
                $record->type = $meal['type'];
                $record->sched_date = $meal['date'];
                $record->save();
            }
            return response()->json(['msg' => $meal['title']], 200);
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
