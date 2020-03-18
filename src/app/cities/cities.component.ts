import { Component, OnInit } from '@angular/core';
import { CityItem} from '../city-item';
import { CITY_ITEMS } from '../cities.data';
import { CitiesService } from '../cities.service';
import { MainComponent } from '../main/main.component';
import { CitySearchComponent } from '../city-search/city-search.component';



@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
cityItems: CityItem[];
public temperature: string;


constructor(private citiesService: CitiesService) { }

  ngOnInit(): any {
    this.cityItems = this.citiesService.getCityItems(); 

  }

 onTemperature(unit: string){  
 
switch(unit)
{
  case 'metric':
    
    {
      //this.cityItems.map(({temperature}) => temperature);
       ;
        this.temperature = unit;
        console.log(unit)
        this.cityItems[0].temperature = 12;
     break;
    
    }
    

 
 
 case 'imperial':
   {
     this.temperature = unit;
    break;

   }
 

   default:
     {
      this.temperature = 'metric';
      break;
     }

}
    
 }



}
