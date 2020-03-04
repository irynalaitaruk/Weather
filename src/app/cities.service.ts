import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Response, Headers, RequestOptions, } from '@angular/http';
import { CITY_ITEMS } from './cities.data';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { CityItem } from './city-item';
import { forkJoin } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CitiesService {
wrong: boolean = false;

  constructor(private http: Http) {}



getCityItems(){
  return CITY_ITEMS;
}

addCityItem(cityItem: CityItem){
  CITY_ITEMS.push(cityItem);
}


searchCityData(city: string, unit: string): Observable<any>{ 

return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=87897826fbc7d5674803b2dd2d10ce69&units=' + unit)
.map((response: Response) => response.json())
.catch((error) => {
  console.log(error);
  return Observable.throw(error.statusText);
});
}


/*
onLoadCities():Observable<any>{
  return this.http.get('http://api.openweathermap.org/data/2.5/group?id=703448,2643743&units=metric&APPID=87897826fbc7d5674803b2dd2d10ce69')
  .map((response: Response) => response.json())
}
*/





 



}
