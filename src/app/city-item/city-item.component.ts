import { Component, OnInit, Input } from '@angular/core';
import { CityItem } from '../city-item';
import { CitiesService } from '../cities.service';





@Component({
  selector: 'app-city-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.css']
})
export class CityItemComponent implements OnInit {
@Input() cityItem: CityItem;

  constructor(private citiesService: CitiesService) { }

  ngOnInit() {
  }

  onDelete(cityItem){
    console.log('delete work');
    this.citiesService.deleteCity(cityItem).subscribe();
  }

}
