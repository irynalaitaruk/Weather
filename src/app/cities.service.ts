import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: Http) { }
  
  getCity(){
    return this.this.http.get('api.openweathermap.org/data/2.5/weather?q=London');
  }
 this
}
