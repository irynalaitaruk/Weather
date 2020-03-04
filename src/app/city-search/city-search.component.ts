import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CitiesService } from '../cities.service';
import { CityItem } from '../city-item';
import {FormGroup, FormBuilder } from '@angular/forms';
import { CityItemComponent } from '../city-item/city-item.component';
import { forkJoin, zip } from 'rxjs';
//import { Route } from '@angular/compiler/src/core';
//import { CityItemComponent } from '../city-item/city-item.component';
//import 'rxjs/Rx';
//import { map } from 'rxjs/operators';



@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {
@Output() toggle = new EventEmitter<string>();
@Input() test: string;


searchStr = '';
unit: string;
form: FormGroup;
wrongCity = 'City not found';
isHidden: boolean = false;

public celsius;
public fahrenheit;
//temperature: string;

  constructor(private citiesService: CitiesService, 
    private builder: FormBuilder,
   ) {
   
   }


  ngOnInit() {
    this.form = this.builder.group({
      name: ''
    }); 

    
  }

  onSubmit(form: FormGroup){

    /*console.log(this.test);
      this.citiesService.searchCityData(this.form.value.name, this.test)
  
    
          .subscribe(data => {
          
            this.celsius  = new CityItem (data.name,'http://openweathermap.org/img/wn/' + data.weather[0].icon + '.png',
          Math.round(data.main.temp) )
         
         
        
        
  this.citiesService.addCityItem(this.celsius);



           
            
            
            this.isHidden = false;
          },
          error => { console.log('error');
          this.isHidden = !this.isHidden;
         }
    )
    */
   
    forkJoin([
      this.citiesService.searchCityData(this.form.value.name, this.test),
      this.citiesService.searchCityData(this.form.value.name, this.test)
    ])
    
          .subscribe(data => {
          
            this.celsius  = new CityItem (data[0].name,'http://openweathermap.org/img/wn/' + data[0].weather[0].icon + '.png',
          Math.round(data[0].main.temp) )
         
         
          this.fahrenheit  = new CityItem (data[1].name,'http://openweathermap.org/img/wn/' + data[1].weather[0].icon + '.png',
          Math.round(data[1].main.temp) )

  this.citiesService.addCityItem(this.celsius);

  this.citiesService.addCityItem(this.fahrenheit);

           
            
            
            this.isHidden = false;
          },
          error => { console.log('error');
          this.isHidden = !this.isHidden;
         }
    )
   
    
                 
  } 


  
 onToggleClick(unit: string) {
this.toggle.emit(unit);
 }
 
 

}




    /*
forkJoin(
  this.citiesService.searchCityData(this.form.value.name),
  this.citiesService.searchCityData(this.form.value.name)   
)
 .subscribe(([res1, res2]) => {
   const celsius = new CityItem (res1.name,'http://openweathermap.org/img/wn/' + res1.weather[0].icon + '.png',
   Math.round(res1.main.temp-273.15)
   )

 
    this.citiesService.addCityItem(celsius);
    console.log(celsius);

  const fahrenheit = new CityItem (res2.name,'http://openweathermap.org/img/wn/' + res2.weather[0].icon + '.png', 
Math.round((res2.main.temp - 273.15) * 9/5) + 32)
  
 
    //this.citiesService.addCityItem(fahrenheit);
   
    console.log(fahrenheit);
  // this.unit = Math.round(res1.main.temp-273.15)+ 'C';
   
   //console.log(this.unit)
 }
    */
   /*
   //forkJoin(
  this.citiesService.searchCityData(this.form.value.name)
  //this.citiesService.searchCityData(this.form.value.name)   
//)
 .subscribe(data => {
   const celsius = new CityItem (data[0].name,'http://openweathermap.org/img/wn/' + data[0].weather[0].icon + '.png',
   Math.round(data[0].main.temp)
   )
   this.celsius = celsius.temperature;
    //this.citiesService.addCityItem(celsius);
    console.log(celsius.temperature);

 
  const fahrenheit = new CityItem (data[1].name,'http://openweathermap.org/img/wn/' + data[1].weather[0].icon + '.png', 
  Math.round(data[1].main.temp)  
  )
  this.citiesService.addCityItem(celsius);
  this.citiesService.addCityItem(fahrenheit);
  console.log(fahrenheit);
  this.fahrenheit = fahrenheit.temperature;
  console.log(fahrenheit.temperature);
 },
 error => { console.log('error');
          this.isHidden = !this.isHidden;
         }

 ) */ 