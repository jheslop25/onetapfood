<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Meal extends Model
{
    public function User(){
        return $this->belongsTo('App\User');
    }
    public function Ingredient(){
        return $this->hasMany('\App\Ingredient');
    }
    // public function order(){
    //     return $this->belongsTo('\App\Order');
    // }
}
