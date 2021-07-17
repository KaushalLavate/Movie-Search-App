import { Component, OnInit } from '@angular/core';
import { MovieService } from "../../services/movie.service";

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  watchlist_movies:any;
  movies:any[]=[];

  constructor(private movieService : MovieService) { }

  ngOnInit() {
    this.watchlist_movies=localStorage.getItem("IDs").split(',');
    this.watchlist_movies.forEach(movieId => {
      this.movieService.getMovieByID(movieId).subscribe(res=>{
        if(res.Response!="False"){
          this.movies.push(res);
        }
      })
    });
    setTimeout(() => {
      console.log(this.movies);
    }, 1000);
  }

}
