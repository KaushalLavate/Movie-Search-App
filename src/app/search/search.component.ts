import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MovieService } from '../services/movie.service.js';
import { Search } from '../models/movie.js';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movies: string[];
  searchControl: FormControl;
  review : string;
  constructor(private movieService : MovieService,
    public dialog: MatDialog,
    public _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.searchControl = new FormControl();
    
    /*this.movies = this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(
          searchString => this.movieService.getMovieBySearchTerm(searchString)
        ),
        map((res:any) => res.Search)
      );*/

      this.searchControl.valueChanges.subscribe(data=>{
        setTimeout(() => {
        this.getMovies(data)
        }, 1000);
      })
      
  }
  getMovies(query:string){
    this.movieService.getMovieBySearchTerm(query).subscribe(res=>{
      if(res.Response){
        this.movies=res.Search;
      }
    })
  }

  openDialog(imdbID:string,Title:string): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '300px',
      data: { imdbID,Title, rating:5,review:''}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result!=undefined && result.review!=''){
        this.openSnackBar(Title,status='Review Submited');
        sessionStorage.setItem("Review",JSON.stringify(result));
        this.review = JSON.parse(sessionStorage.Review);
        console.log(this.review);
      }
      else{
        this.openSnackBar(Title,status='Review Not Submited');
      }
    });
  }
  openSnackBar(name: string, review: string) {
    this._snackBar.open(name, review, {
      duration: 2000,
    });
  }

}
