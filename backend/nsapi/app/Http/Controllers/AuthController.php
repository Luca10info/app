<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
class AuthController extends Controller
{
    public function login(Request $request)
    {

        $email=$request->email;
        $password=$request->password;

        if (empty($email) or empty($password)) {
            return response()->json(['status'=>'error','messagge'=>'You must fill all the fields']);
        }

        $credentials = request(['email', 'password']);

        if (! $token = JWTAuth::attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => 60
        ]);
    }
    public function register(Request $request){

        $this->validate($request,[
            'username' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required'
        ]);
        try{
            $user = new User();
            $user->username = $request->username;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            
            if($user->save()){
                return response()->json(['status' => 'ok', 'message' => 'registered']);
            }
        }catch(\Exception $e){
            return response()->json(['status'=>'error', 'message' => $e->getMessage()]);
        }

    }

    public function logout(Request $request){
        
        
        if(JWTAuth::invalidate(JWTAuth::parseToken())){
            return response()->json(['status'=>'success','messagge'=>'correct logout']);
        }
        return response()->json(['status'=> 'error','messagge'=>'error with the logout']);
        
    }

}
