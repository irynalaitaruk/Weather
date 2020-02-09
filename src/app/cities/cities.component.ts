import { Component, OnInit } from '@angular/core';
import { CityItem} from '../city-item';
import { CITY_ITEMS } from '../cities.data';
import { CitiesService } from '../cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
cityItems: CityItem[];


constructor(private citiesService: CitiesService) { }

  ngOnInit(): any {
    this.cityItems = this.citiesService.getCityItems(); 
  }




}
