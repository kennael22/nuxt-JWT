<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class DataController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api');
    }

    public function users(){
        return response()->json([
            'data' => User::get()
        ], 201);
    }
}
