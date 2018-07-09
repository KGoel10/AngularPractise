import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IArticle } from './article';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pagename: string;
  mydata: any;

  constructor(private http: HttpClient) { 
    this.pagename="Home Page!!";
  }

  ngOnInit() {
    //this.http.get('http://localhost:13578/api/myapi').subscribe(data => {console.log(data);
    
    // this.http.get('http://localhost:13578/api/myapi').subscribe(
    //   data=>{
    //     this.mydata=data;
    //     console.log(data);
    //   }
    // );
    
    //window.location.href = 'http://www.google.com';

  }

  // getArticles():Observable<IArticle[]>
  // {
  //   return this.http.get('http://localhost:13578/api/myapi').map((response:Response)=>{
  //     return <IArticle[]>response.json()
  //   });
  // }


}
