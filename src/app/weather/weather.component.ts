import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {


title = 'Weather works';
inputTitle: any[] = [1, 2, 'test'];


  constructor() { }

  ngOnInit() {
  }
  
  onNotify(): void {
   alert('Output works!');
 
  }

}
