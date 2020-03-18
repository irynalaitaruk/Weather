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


  constructor(private citiesService: CitiesService) {

  }
 
  ngOnInit() {
    /*
    this.citiesService.onLoadCities()
    .subscribe(data => {
      
      const cityItem  = new CityItem (data.name,'http://openweathermap.org/img/wn/' + data.weather[0].icon + '.png', {
        
      F: Math.round(((data.main.temp - 273.15) * 9/5) + 32),
      C: Math.round(data.main.temp-273.15)})
     
      this.citiesService.addCityItem(cityItem);
      
      
    })
   */
  }
  
//Delete item
  onDelete(){ 
       this.isHideElem = false;
  
  }


}


  


  



