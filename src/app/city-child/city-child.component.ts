import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-city-child',
  templateUrl: './city-child.component.html',
  styleUrls: ['./city-child.component.css']
})
export class CityChildComponent implements OnInit {
@Input() example: any[];
@Output() notify = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

}
