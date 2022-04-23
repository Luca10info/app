<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
class UserController extends Controller
{
    //

    public function show(Request $request){

        if (! $user = JWTAuth::parseToken()->authenticate()) {
            return response()->json(['user_not_found'], 404);
    }
        $user = User::find($user->id);
        return $user? $user : response()->json([],404);

    }
}
