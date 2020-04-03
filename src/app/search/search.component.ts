import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import {Observable } from 'rxjs';
import { MovieService } from '../services/movie.service.js';
import { Search } from '../models/movie.js';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movies$: Observable<Search[]>;
  searchControl: FormControl;
  constructor(private movieService : MovieService) { }

  ngOnInit() {
    
    this.searchControl = new FormControl();
    this.movies$ = this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(
          searchString => this.movieService.getMovieBySearchTerm(searchString)
        ),
        map((res:any) => res.Search)
      );
  
  }

}
