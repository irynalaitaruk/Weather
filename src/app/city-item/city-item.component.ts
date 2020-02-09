import { Component, OnInit, Input } from '@angular/core';
import { CityItem } from '../city-item';





@Component({
  selector: 'app-city-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.css']
})
export class CityItemComponent implements OnInit {
@Input() cityItem: CityItem;

  constructor() { }

  ngOnInit() {
  }

}
