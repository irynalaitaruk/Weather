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
//test: CityItem[];
//onNotify(){
 // alert('WORK');
//}
//city: CityItem[];

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
    //this.citiesService.onClickC.subscribe(c => this.isHiddenFahrenheit = false , this.isHiddenCelsius = true);
    //this.citiesService.onClickF.subscribe(c => this.isHiddenCelsius = false, this.isHiddenFahrenheit = true);
    //this.city = this.citiesService.getCityItems();
  }
  //
city: CityItem;
  onDelete(cityItem: CityItem){
    console.log('delete work');
    //this.city = this.city.filter(c => c !== cityItem);
    this.citiesService.deleteCity(cityItem).subscribe();
  }


  


  


}
