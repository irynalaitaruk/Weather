import { Component, OnInit } from '@angular/core';
//import { CityItem } from '../city-item';
import { CitiesService } from '../cities.service';

@Component({
  selector: 'app-celsius',
  templateUrl: './celsius.component.html',
  styleUrls: ['./celsius.component.css']
})
export class CelsiusComponent implements OnInit { 
  //@Output() notify = new EventEmitter();
  //@Input() temp: CityItem;
  work:string =' Celsius work!';




  constructor(private citiesService: CitiesService) { }

  ngOnInit() {
    //this.citiesServise.getCityItems();
     // this.citiesService.addCityItem(cityItem);
  }
  

}
