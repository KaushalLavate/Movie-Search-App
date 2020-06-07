import { Component, OnInit } from '@angular/core';
import  * as data from '../database/movie-list.json';
import { MovieService } from '../services/movie.service.js';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  movies: any = (data as any).movies;
  review : string;
  isActive : Boolean = false;
  iconColor : string = "none";

  constructor(private movieService : MovieService,
    public dialog: MatDialog,
    public _snackBar: MatSnackBar) { }
    s_movies:string;
  
    ngOnInit(){
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
  bookmark(title:JSON){
    //console.log(title);
    sessionStorage.setItem("Movie_Title",JSON.stringify(title));
  }
  click(){
    this.isActive=!this.isActive;
    if(this.iconColor=="accent"){
      this.iconColor = "none";
    }
    else{
      this.iconColor="accent";
    }
  }
}



