import { Component, OnInit } from '@angular/core';
import { City } from '../city-item';


@Component({
  selector: 'app-city-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.css']
})
export class CityItemComponent implements OnInit {
cityItem: City = {
 cityName: 'Lviv',
 icon: 'O',
 temperature: 10
};

  constructor() { }

  ngOnInit() {
  }

}
