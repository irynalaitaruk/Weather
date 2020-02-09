import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../cities.service';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {



constructor(private citiesService: CitiesService) { }

  ngOnInit() {
  }




}
