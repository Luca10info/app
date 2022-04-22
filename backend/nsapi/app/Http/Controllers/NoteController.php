<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Test\Constraint\ResponseIsRedirected;
use Tymon\JWTAuth\Facades\JWTAuth;

class NoteController extends Controller
{
    //
    public function index(){
        return Note::where('open','=', 1)
            ->orWhere('user_id','=',JWTAuth::user()->id)
            ->get(); 
    }

    public function store(Request $request){
        try {
            $note = new Note();
            $note->title = $request->title;
            $note->text = $request->text;
            $note->img = $request->img;
            $note->open = $request->open;            
            $note->user_id = JWTAuth::user()->id;
            if($note->save()){
                return response()->json(['status'=>'success','message'=>'Note create successfully']);
            }
        
        } catch (\Throwable $th) {
           return response()->json(['status'=>'error', 'message'=>$th->getMessage()]);
        }
        
    }
    public function update(Request $request, $id){

        try {
            $note = Note::findOrFail($id);
            
            if($note->user_id != JWTAuth::user()->id){
                return response()->json([
                    'error' => 'You are not authorized to delete this note.'
                ], 400);
            }
            
            $note->title = $request->title;
            $note->text = $request->text;
            $note->img = $request->img;
            $note->open = $request->open;            
            $note->user_id = JWTAuth::user()->id;

            if($note->save()){
                return response()->json(['status'=>'success','message'=>'Note create successfully']);
            }
        
        } catch (\Throwable $th) {
           return response()->json(['status'=>'error', 'message'=>$th->getMessage()]);
        }
    }

    public function delete(Request $request, $id){
        try {
            $note = Note::findOrFail($id);

            if (!$note) {
                return response()->json([],404);
            }
            if ($note->user_id != JWTAuth::user()->id) {
                return response()->json([
                    'error' => 'You are not authorized to delete this note.'
                ], 400);
            }
            if($note->delete()){
                return response()->json(['status'=>'success','message'=>'Note delete successfully']);
            }
        
        } catch (\Throwable $th) {
           return response()->json(['status'=>'error', 'message'=>$th->getMessage()]);
        }
    }

    public function getNote(Request $request, $id){

        try {
            
            if(!$note = Note::findOrFail($id)){
                return response()->json(['error'=>'404', 'messagge' => 'Note not found']);
            }
            if(!($note->open || $note->user_id!=JWTAuth::user()->id)){
                return response()->json(['error'=>'401', 'messagge' => 'Unauthorized']);
            }
            return $note;

        } catch (\Throwable $th) {
            return response()->json(['error'=>'404', 'messagge' => $th->getMessage()]);
        }

    }
}
