import { Component, OnInit } from '@angular/core';
import  * as data from '../database/movie-list.json';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  movies: any = (data as any).movies;

  constructor() { }

 ngOnInit(){
  }
}
