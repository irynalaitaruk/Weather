import { Component, OnInit } from '@angular/core';

interface City {
  id: number;
  cityName: string;
}

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

cities: City[] = [
 {
   id: 1,
   cityName: 'Kyiv'
 },
  {
   id: 2,
   cityName: 'Lviv'
 },
  {
   id: 3,
   cityName: 'Rivne'
 },
  {
   id: 4,
   cityName: 'Kharkiv'
 }
]

  constructor() { }

  ngOnInit() {
  }

}
