import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fahrenheit',
  templateUrl: './fahrenheit.component.html',
  styleUrls: ['./fahrenheit.component.css']
})
export class FahrenheitComponent implements OnInit {
title: string ='Fahrenheit work';
  constructor() { }

  ngOnInit() {
  }

}
