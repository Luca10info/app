<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    //
    public function index(){
        return Note::all(); 
    }

    public function store(Request $request){
        try {
            $note = new Note();
            $note->title = $request->title;
            $note->text = $request->text;
            $note->img = $request->img;
            $note->open = $request->open;            

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
            $note->title = $request->title;
            $note->text = $request->text;
            $note->img = $request->img;
            $note->open = $request->open;            

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

            if($note->delete()){
                return response()->json(['status'=>'success','message'=>'Note delete successfully']);
            }
        
        } catch (\Throwable $th) {
           return response()->json(['status'=>'error', 'message'=>$th->getMessage()]);
        }
    }
}