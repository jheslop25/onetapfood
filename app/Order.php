<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'store_orders';

    public function user(){
        return $this->belongsTo('\App\User');
    }
    public function meal(){
        return $this->hasMany('\App\Meal');
    }
}
