import { Component, OnInit, Input } from '@angular/core';
import { CityItem } from '../city-item';
import { CitiesService } from '../cities.service';



@Component({
  selector: 'app-city-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.css']
})
export class CityItemComponent implements OnInit {
@Input() cityItem: CityItem;
isHideElem: boolean = true;

isHiddenCelsius: boolean = true;
isHiddenFahrenheit: boolean = true;


  constructor(private citiesService: CitiesService) {

  }

  ngOnInit() {
    this.citiesService.onClickC.subscribe(c => {
      if(this.isHiddenCelsius)
      this.isHiddenFahrenheit = false;
    });
    this.citiesService.onClickF.subscribe(c => {
      if(this.isHiddenFahrenheit)
      this.isHiddenCelsius = false;
    });
   
  }
  

  onDelete(cityItem: CityItem){ 
       this.isHideElem = false;
  
  }


}


  


  



