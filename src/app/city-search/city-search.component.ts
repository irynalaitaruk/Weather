import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../cities.service';
import { CityItem } from '../city-item';
import {FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {
form: FormGroup;

  constructor(private citiesService: CitiesService, private builder: FormBuilder) { }

  ngOnInit() {
    this.form = this.builder.group({
      name: 'Test'
    });
   
  }

  onSubmit(form: FormGroup){
     this.citiesService.searchCityData(this.form.value)
       .subscribe(data => {
         const cityItem  = new CityItem (data.name, data.weather[0].icon, data.main.temp);
         this.citiesService.addCityItem(cityItem);
        
       })
  }

}
