import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MovieService } from "../../services/movie.service";
import { Router } from "@angular/router";
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchControl: FormControl;
  message:string;
  movies:any;
  constructor( 
    private movieService : MovieService,
    private router:Router) { }

  
  ngOnInit() {
    this.searchControl = new FormControl();
    this.movies = this.searchControl.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        ).subscribe(()=>{
          this.getMovies(this.searchControl.value);
        })
  }

  getMovies(query:string){
    this.movieService.changeMovie(query);
    /*this.movieService.getMovieBySearchTerm(query).subscribe(res=>{
      if(res.Response){
        this.movies=res.Search;
        console.log(res.Search);
      }
    })*/
  }
  search(){
    this.router.navigate(['search', this.searchControl.value]);
  }

}
