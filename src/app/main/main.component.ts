import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 title = 'Home page works!';



users: Object[] = [
  {
    name: 'John',
    hide: 'hideElement'
  },
  {
    name: 'Tom',
    hide: 'hideElement'
  },
  {
    name: 'Bob',
    hide: 'hideElement'
  }
];

  constructor() { }

  ngOnInit() {
  }

 

}
