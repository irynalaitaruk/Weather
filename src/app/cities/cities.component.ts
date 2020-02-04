import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../cities.service';
import { Response } from '@angular/http';



@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

myText = '';
values = '';
citiesList;

constructor(private citiesService: CitiesService) { }

  ngOnInit() {
  this.citiesList = this.citiesService.getCitiesList();
  
 
  }


message(event: Event): void {
   this.values = (<HTMLInputElement>event.target).value;
   
}


}
