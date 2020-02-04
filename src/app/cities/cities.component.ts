import { Component, OnInit } from '@angular/core';

interface City {
  id: number;
  name: string
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
   name: 'Rivne'
 },
  {
   id: 4,
   name: 'Kharkiv'
 }
]



  constructor() { }

  ngOnInit() {
  }


onMessage(event: Event): void {
   this.values = (<HTMLInputElement>event.target).value
   
}


}
