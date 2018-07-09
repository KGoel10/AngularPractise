import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public ratingStar: string;
  constructor(private httpService: HttpClient) { }
  arrProducts: string[];

  ngOnInit() {
    //this.ratingStar = '5 Star Rating';

    // this.httpService.get('./assets/product.json').subscribe(
    //   data=>{
    //     this.arrProducts=data as string[];
    //     console.log(this.arrProducts);
    //   }
    // );

    this.httpService.get('http://localhost:13578/api/myapi').subscribe(data => {
    this.arrProducts=data as string[];  
    console.log(data);
    });

}

}
