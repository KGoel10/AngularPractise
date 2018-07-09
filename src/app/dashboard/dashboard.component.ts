import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  arrUsers:string[];
  ngOnInit() {
  let userItem =  localStorage.getItem('userToken');
  console.log(userItem);
  this.arrUsers = JSON.parse(userItem) as string[];
  }

}
