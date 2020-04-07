<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $table = 'cart';

    public function ingredients(){
        return $this->hasMany('\App\Ingredient');
    }

    public function order(){
        return $this->hasOne('\App\Order');
    }
}
