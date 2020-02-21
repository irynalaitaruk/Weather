import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CitiesComponent } from './cities/cities.component';
import { WeatherComponent } from './weather/weather.component';
import { FormsComponent } from './forms/forms.component';
import { CelsiusComponent } from './celsius/celsius.component';
import { FahrenheitComponent } from './fahrenheit/fahrenheit.component';

const routes: Routes = [
  {path: '', component: MainComponent}, 
  {path: 'cities', component: CitiesComponent,
    children: [
      {path: 'tempC', component: CelsiusComponent, outlet: 'celsius'},
      {path: 'tempF', component: FahrenheitComponent, outlet: 'fahrenheit'}
    ]
},
  {path: 'weather', component: WeatherComponent},
  {path: 'forms', component: FormsComponent},

 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
