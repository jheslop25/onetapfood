<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class mealPlanController extends Controller
{
    public function getAllMeals(){
        // a function that returns the whole meal plan stored in the DB
        // if no current record then return a json object that prompts the client to create one
    }

    public function storeMealPlan(){
        // a function that stores a meal plan in the DB. we'll build the meal plan with js on client.
    }

    public function updateMealPlan(){
        // a function that updates a meal plan record typically to add or remove a meal.
    }
}
