import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formcreate',
  templateUrl: './formcreate.component.html',
  styleUrls: ['./formcreate.component.css']
})
export class FormcreateComponent implements OnInit {


  users: Object[]= [{
    name: 'John'
  },
{
    name: 'Bob'
}];

  constructor() { }

  ngOnInit() {
  }




 addUser(newuser: string){
   if(newuser){
     this.users.push(newuser);
  
   }
 }


}
