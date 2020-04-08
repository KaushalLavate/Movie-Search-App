import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
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
  movies$: Observable<Search[]>;
  searchControl: FormControl;
  review : string;
  constructor(private movieService : MovieService,
    public dialog: MatDialog,
    public _snackBar: MatSnackBar) { }

    openDialog(id:string,name:string): void {
      const dialogRef = this.dialog.open(ModalComponent, {
        width: '250px',
        data: { id,name, rating:5,review:''}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        /*this.review = result;
        console.log(this.review);*/
        result!=undefined?this.openSnackBar(name,status='Submited'):this.openSnackBar(name,status='Not Submited')
        sessionStorage.setItem("Review",JSON.stringify(result));
        this.review = JSON.parse(sessionStorage.Review);
        console.log(this.review);
      });
    }
    openSnackBar(name: string, review: string) {
      this._snackBar.open(name, review, {
        duration: 2000,
      });
    }

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
