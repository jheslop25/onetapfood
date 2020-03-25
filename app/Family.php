<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Family extends Model
{
    protected $table = 'family';

    public function user(){
        return $this->belongsTo('\App\User');
    }
}
