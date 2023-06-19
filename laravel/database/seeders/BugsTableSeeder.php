<?php

namespace Database\Seeders;

use App\Models\Bug;
use App\Models\Project;
use Illuminate\Database\Seeder;

class BugsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $faker = \Faker\Factory::create();

        Project::all()->each(function ($project) use ($faker) {
           foreach (range(1, 5) as $i) {
               Bug::create([
                   'project_id' => $project->id,
                   'title' => $faker->sentence
               ]);
           }
        });
    }
}
