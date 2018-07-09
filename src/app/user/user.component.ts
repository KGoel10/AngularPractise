import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { HttpParamsOptions } from '../../../node_modules/@angular/common/http/src/params';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //constructor(private router: Router, private httpService: HttpClient, options:HttpParamsOptions={} as HttpParamsOptions) { }
  constructor(private router: Router, private httpService: HttpClient){}

  ngOnInit() {
  }

  arrUsers:string[];

  OnSubmit(userName,password){
    // let params = new HttpParams().set("username",userName).set("password", password);
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');

    let url="http://localhost:13578/api/myapi/GetUser?username="+userName+"&password="+password;

    this.httpService.get(url).subscribe(data => {
    this.arrUsers=data as string[];  
    console.log(data);
    localStorage.setItem('userToken',JSON.stringify(data));
    this.router.navigate(['/dashboard']);
    });

  }

}
