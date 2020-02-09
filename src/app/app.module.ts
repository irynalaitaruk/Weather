import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CitiesService } from './cities.service';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainComponent } from './main/main.component';
import { CitiesComponent } from './cities/cities.component';
import { WeatherComponent } from './weather/weather.component';
import { FormsComponent } from './forms/forms.component';
import { MainListComponent } from './main-list/main-list.component';
import { FormcreateComponent } from './formcreate/formcreate.component';
import { CityItemComponent } from './city-item/city-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MainComponent,
    CitiesComponent,
    WeatherComponent,
    FormsComponent,
    MainListComponent,
    FormcreateComponent,
    CityItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [CitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
