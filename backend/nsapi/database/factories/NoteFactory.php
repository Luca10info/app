<?php

namespace Database\Factories;

use App\Models\Note;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class NoteFactory extends Factory
{
    protected $model = Note::class;

    public function definition(): array
    {
    	return [
    	    //s
            'title'=> $this->faker->sentence,
            'text'=> $this->faker->text,
            'img'=>$this->faker->url,
            'open'=>$this->faker->boolean,
            'user_id'=> User::all()->random()->id
    	];
    }
}
