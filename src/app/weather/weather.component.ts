import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {


title = 'Weather works';
inputTitle: any[] = [1, 2, 'test'];
outputText = '';

  constructor() { }

  ngOnInit() {
  }
  
  onNotify(): void {
    this.outputText = 'Output works!';
  }

}
