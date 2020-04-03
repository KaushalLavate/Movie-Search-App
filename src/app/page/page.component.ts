import { Component, OnInit, Input } from '@angular/core';
import  * as data from '../database/movie-list.json';
import { MovieService } from '../services/movie.service.js';
import { Observable } from "rxjs";

import { FormControl } from '@angular/forms';
import { map, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Search } from '../models/movie.js';



@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  movies: any = (data as any).movies;

  constructor(private movieService : MovieService) { }

 ngOnInit(){
  
  }
}
