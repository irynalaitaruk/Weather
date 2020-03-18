import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {
  @Input() someuser: Object[];
  hideElem: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
