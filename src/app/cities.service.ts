import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CITY_ITEMS } from './cities.data';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { CityItem } from './city-item';
import { Response } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) { }
  
getCityItems(){
  return CITY_ITEMS;
}

addCityItem(cityItem: CityItem){
  CITY_ITEMS.push(cityItem);
}

searchCityData(city: string): Observable<any>{
   
return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q= ${city} &APPID=87897826fbc7d5674803b2dd2d10ce69&units=metric`)
.map((response: Response) => response.json())
.catch(error => {
   console.log(error);
   return Observable.throw(error.json())
})
}

}
