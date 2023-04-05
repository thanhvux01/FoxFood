<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Category extends Model
{
    use HasFactory;
    protected $fillable = [
        'name'
    ];

//    public function dish() {
//        return $this->hasOne('App\Models\Dish');
//    }
//    public function dishes() {
//        return $this->hasMany('App\Models\Dish');
//    }
    public function toManyDishes()
    {
        return $this->belongsToMany('App\Models\Dish');
    }

}
