import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
  })

  export class StarComponent{
    starTitle = "Great! Star Component";
    @Input() rating:string;
  }