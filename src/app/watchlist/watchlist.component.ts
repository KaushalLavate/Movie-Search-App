import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  watchlist_movies:any;
  constructor() { }

  ngOnInit() {
    /*while(sessionStorage.Movie_Title!=0){
      this.watchlist_movies = JSON.parse(sessionStorage.Movie_Title);
      console.log(this.watchlist_movies);
    }*/
  }

}
