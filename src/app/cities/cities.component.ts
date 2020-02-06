import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../cities.service';
import { Response } from '@angular/http';

interface City {
    id: number;
    name: string;
}

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

myText = '';
values = '';

cities: City[] = [
 {
    id: 1,
    name: 'Kyiv'
  },
     {
    id: 2,
    name: 'Lviv'
  },
  {
    id: 3,
    name: 'Kharkiv'
  },
  {
    id: 4,
    name: 'Rivne'
  }
];

constructor(private citiesService: CitiesService) { }

  ngOnInit() {
  
  /*this.citiesList = this.citiesService.getCitiesList();*/
  
 
  }


message(event: Event): void {
   this.values = (<HTMLInputElement>event.target).value;
   
}


}
