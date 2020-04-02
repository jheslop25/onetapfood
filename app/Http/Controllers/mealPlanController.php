<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class mealPlanController extends Controller
{
    public function getAllMeals(Request $request)
    {
        // a function that returns the whole meal plan stored in the DB
        // if no current record then return a json object that prompts the client to create one
            $params = $request->input;
            $meals = \App\Meal::where('user_id', $request->user()->id)->orderBy('created_at', 'desc')->get();
            return response()->json(['meals'=> $meals], 200);

    }

    public function storeMealPlan(Request $request)
    {
        // a function that stores a meal plan in the DB. we'll build the meal plan with js on client.
        if (Auth::check()) {
            $mealPlan = $request->post;
            foreach ($mealPlan as $meal) {
                $record = new \App\Meal();
                $record->user_id = Auth::user()->id;
                $record->title = $meal['title'];
                $record->ingredients_array = $meal['ingredients'];
                $record->instructions = $meal['instructions'];
                $record->photo_URL = $meal['photo'];
                $record->type = $meal['type'];
                $record->sched_date = $meal['date'];
                $record->save();
            }
            return response()->json(['status' => '200']);
        }
    }

    public function updateMealPlan(Request $request)
    {
        // a function that updates a meal plan record typically to add or remove a meal.
        if (Auth::check()) {
            $params = $request->post;
            $meal = \App\Meal::find($params['id']);
            $meal->user_id = Auth::user()->id;
            $meal->title = $meal['title'];
            $meal->ingredients_array = $meal['ingredients'];
            $meal->instructions = $meal['instructions'];
            $meal->photo_URL = $meal['photo'];
            $meal->type = $meal['type'];
            $meal->sched_date = $meal['date'];
            $meal->save();
            return response()->json(['status' => '200']);
        }
    }
}
