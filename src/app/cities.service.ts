import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: Http) { }
  
  getCitiesList() {
    return this.http.get('/assets/cities.json');
  }
  
 
}
