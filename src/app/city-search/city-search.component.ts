import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../cities.service';
import { CityItem } from '../city-item';
import {FormGroup, FormBuilder } from '@angular/forms';
//import { CityItemComponent } from '../city-item/city-item.component';



@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {
 //@ViewChild('child', {static: false}) 
 //private child: CityItemComponent;
 

form: FormGroup;
wrongCity = 'City not found';
isHidden: boolean = false;
//isHiddenFahrenheit:boolean = false;
//isHiddenCelsius:boolean = true;
hideC: boolean;
hideF: boolean;
  
    
  

  constructor(private citiesService: CitiesService, private builder: FormBuilder) {
    
   }

  ngOnInit() {
    this.form = this.builder.group({
      name: 'Lviv'
    }); 
    //
    this.citiesService.onClickC.subscribe(c => {
      if(c) this.hideF=false});
    this.citiesService.onClickF.subscribe(c => {
      if(c) this.hideC=false});
    //this.citiesService.onClickC.subscribe(c => this.hideC = true, this.hideF=false);
    //this.citiesService.onClickF.subscribe(c => this.hideC = false, this.hideF=true);
  }

  public clickCelcius() {
    this.citiesService.doClickC();
  } 

  public clickFahrenheit(){
    this.citiesService.doClickF();

  }

  onSubmit(form: FormGroup){
     this.citiesService.searchCityData(this.form.value.name)
       .subscribe(data => {
         const cityItem  = new CityItem (data.name,'http://openweathermap.org/img/wn/' + data.weather[0].icon + '.png', {
           
         F: Math.round(((data.main.temp - 273.15) * 9/5) + 32),
         C: Math.round(data.main.temp-273.15)});
         this.citiesService.addCityItem(cityItem);
         this.isHidden = false;
         
         //this.isHiddenCelcius = true;
         //console.log(data, data.name, data.weather[0].icon);
       },
       error => { console.log('error');
       this.isHidden = !this.isHidden;
      }
       )
      
  }  

 
 
                                        

}
