<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Property;
use App\Models\User;
use App\Models\Service;
use App\Models\Sponsorship;


class PropertySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Property::factory() -> count(20) -> make() -> each(function($property) {

            // Associa ogni proprietà con uno user random
            $user = User :: inRandomOrder() -> first();
            $property -> user() -> associate($user);

            $property -> save();

            // Associa ogni propietà con una sponsorship e da una exp_date alla sponsorship associata
            $sponsorship = Sponsorship:: inRandomOrder() -> first();
            $property->sponsorships() -> sync([
                $sponsorship -> id => [
                'exp_date' => now() -> addDays(rand(1, 6)) -> format('Y-m-d')
                ]
            ]);


            // Associa ad ogni proprietà una quantità (1-20) di servizi
            $services = Service :: inRandomOrder() -> limit(rand(1, 20)) -> get();
            $property -> services() -> sync($services);

        });
    }
}