import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainComponent } from './main/main.component';
import { CitiesComponent } from './cities/cities.component';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './weather/weather.component';
import { CityChildComponent } from './city-child/city-child.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MainComponent,
    CitiesComponent,
    WeatherComponent,
    CityChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
