import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../cities.service';
import { CityItem } from '../city-item';
import {FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {
form: FormGroup;
wrongCity = 'City not found';
isHidden: boolean = false;
//units = '';
//celcius = "'units=metric'";
//fahrenheit = 'units=imperial';

  constructor(private citiesService: CitiesService, private builder: FormBuilder) { }

  ngOnInit() {
    this.form = this.builder.group({
      name: 'Test'
    });
   
  }

  onSubmit(form: FormGroup){
     this.citiesService.searchCityData(this.form.value.name)
       .subscribe(data => {
         const cityItem  = new CityItem (data.name,'http://openweathermap.org/img/wn/' + data.weather[0].icon + '.png', data.main.temp);
         this.citiesService.addCityItem(cityItem);
         this.isHidden = false;
         //console.log(data, data.name, data.weather[0].icon);
       },
       error => { console.log('error');
       this.isHidden = !this.isHidden;
      }
       )
      
  }  
/*
  onCelcius(){
    this.citiesService.chooseMetric(this.celcius);
  console.log(this.celcius);
    //this.metric = 'units=imperial';  
  }

onFahrenheit (){
    this.citiesService.chooseMetric(this.fahrenheit);
  console.log(this.fahrenheit);
    //this.metric = 'units=imperial';  
  }
 */
                                          

}
