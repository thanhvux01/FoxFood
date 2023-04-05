<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id','description','address_id'
    ];
    public function dishes() {
        return $this->belongsToMany('App\Models\Dish')->withPivot('quantity','price');
    }
}
