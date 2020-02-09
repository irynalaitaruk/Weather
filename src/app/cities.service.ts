import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CITY_ITEMS } from './cities.data';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: Http) { }
  
getCityItems(){
  return CITY_ITEMS;
}

}
