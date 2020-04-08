import { Component, OnInit } from '@angular/core';
import  * as data from '../database/movie-list.json';
import { MovieService } from '../services/movie.service.js';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalComponent } from "../modal/modal.component";

export interface DialogData {
  id:string;
  name: string;
  rating: number;
  review: string;
}

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  movies: any = (data as any).movies;
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
  
    

 ngOnInit(){
  }
}


