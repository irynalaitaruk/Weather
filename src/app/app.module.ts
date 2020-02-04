import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CitiesService } from './cities.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainComponent } from './main/main.component';
import { CitiesComponent } from './cities/cities.component';
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
    FormsModule,
    HttpModule
  ],
  providers: [CitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
