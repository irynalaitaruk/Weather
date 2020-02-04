import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
title = 'Weather works';
inputTitle = '@inputTitle works!';


  constructor() { }

  ngOnInit() {
  }

}
