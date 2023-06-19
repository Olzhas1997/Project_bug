<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $faker = \Faker\Factory::create();

        Project::create([
           'name' => $faker->name
        ]);

        for ($i = 0; $i < 1; ++$i) {
            Project::create([
                'name'     => $faker->name,
            ]);
        }
    }
}
