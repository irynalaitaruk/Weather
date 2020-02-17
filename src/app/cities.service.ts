import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CITY_ITEMS } from './cities.data';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { CityItem } from './city-item';
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CitiesService {
wrong: boolean = false;
//units: any;
city: string;

  constructor(private http: Http) { }

getCityItems(){
  return CITY_ITEMS;
}

addCityItem(cityItem: CityItem){
  //this.http.post('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&APPID=87897826fbc7d5674803b2dd2d10ce69&units=metric', 'icon, 9');
  CITY_ITEMS.push(cityItem);
}
 
searchCityData(city): Observable<any>{ 
return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=87897826fbc7d5674803b2dd2d10ce69&'+ 'units=metric')
.map((response: Response) => response.json())
.catch((error) => {
  console.log(error);
  return Observable.throw(error.statusText);
})

}
/*
chooseMetric(units: string){
 units;
 console.log(units);
}*/
deleteCity(city): Observable<any>{
  return this.http.delete('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=87897826fbc7d5674803b2dd2d10ce69&units=metric')
 .pipe(
   tap(_ => this.getCityItems)
 )
}

}
