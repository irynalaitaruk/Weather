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
hideC: boolean;
hideF: boolean;
  //cityItem: CityItem;
    
  

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
  
  }

  public clickCelcius() {
    this.citiesService.doClickC();
  } 

  public clickFahrenheit(){
    this.citiesService.doClickF();

  }
  onSubmit(form: FormGroup){
     this.citiesService.searchCityData(this.form.value.name)
   //.distinctUntilChanged((c: CityItem) => c.cityName !== c.cityName)
       .subscribe(data => {
      
         const cityItem  = new CityItem (data.name,'http://openweathermap.org/img/wn/' + data.weather[0].icon + '.png', {
           
         F: Math.round(((data.main.temp - 273.15) * 9/5) + 32),
         C: Math.round(data.main.temp-273.15)})
        
         this.citiesService.addCityItem(cityItem);
         this.isHidden = false;
         
         
       }
       ,
       error => { console.log('error');
       this.isHidden = !this.isHidden;
      }
       )
      
  }  

 
 
                                        

}
