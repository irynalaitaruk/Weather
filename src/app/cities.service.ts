import { Injectable, EventEmitter, Output } from '@angular/core';
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
city: string;
//test: string;

/*private test: CityItem;
get test$(){
  return this.test.asObservable().filter(test => !!test)
}
addTest(data:CityItem) {
  this.test.temperature.C(data);
}*/



  constructor(private http: Http) { }



getCityItems(){
  return CITY_ITEMS;
}

addCityItem(cityItem: CityItem){
  //this.http.post('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&APPID=87897826fbc7d5674803b2dd2d10ce69&units=metric', 'icon, 9');
  CITY_ITEMS.push(cityItem);
}


searchCityData(city): Observable<any>{ 
let cityUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=87897826fbc7d5674803b2dd2d10ce69';
return this.http.get(cityUrl)
.map((response: Response) => response.json())
.catch((error) => {
  console.log(error);
  return Observable.throw(error.statusText);
})

}
/*
getTemperature(): Observable<any>{ 
  return this.http.get(this.cityUrl)
  .map((response: Response) => response.json())
}*/


deleteCity(city): Observable<any>{
  return this.http.delete('http://api.openweathermap.org/data/2.5/weather?q=' + 'city' + '&APPID=87897826fbc7d5674803b2dd2d10ce69')
 .pipe(
   tap(_ => this.getCityItems())
 )
}

onTemperature(){
  
}


private hideC: boolean;
private hideF: boolean;
  @Output() onClickC:EventEmitter<boolean> = new EventEmitter();
  @Output() onClickF:EventEmitter<boolean> = new EventEmitter();

  public doClickC(){
    this.onClickC.emit(this.hideC);
  }
  public doClickF(){
    this.onClickF.emit(this.hideF);
  
  }

}
