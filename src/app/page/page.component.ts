import { Component, OnInit } from '@angular/core';
import  * as data from '../database/movie-list.json';
import { MovieService } from '../services/movie.service.js';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalComponent } from "../modal/modal.component";
import { ActivatedRoute } from "@angular/router";

export interface DialogData {
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
  
  rating: number;
  review: string;

  constructor(private movieService : MovieService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    public _snackBar: MatSnackBar) { }

    openDialog(name:string): void {
      const dialogRef = this.dialog.open(ModalComponent, {
        width: '250px',
        data: { name, rating:this.rating,review:this.review}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.review = result;
        console.log(this.review);
        this.review!=undefined?this.openSnackBar(name,status='Submited'):this.openSnackBar(name,status='Not Submited')
        
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


