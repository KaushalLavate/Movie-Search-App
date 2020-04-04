import { Component, OnInit, Input, Inject } from '@angular/core';
import  * as data from '../database/movie-list.json';
import { MovieService } from '../services/movie.service.js';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Movie } from '../models/movie.js';
import { ModalComponent } from "../modal/modal.component";

export interface DialogData {
  review: string;
  name: string;
}

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  
  movies: any = (data as any).movies;

  review: string;
  name: string;


  constructor(private movieService : MovieService,
    public dialog: MatDialog) { }

  openDialog(): void {
      const dialogRef = this.dialog.open(ModalComponent, {
        width: '250px'
      });

      dialogRef.afterClosed().subscribe(result => {
        
        console.log('The dialog was closed');
        this.review = result;
        });
      
    }

 ngOnInit(){
  
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public _snackBar: MatSnackBar) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  
    openSnackBar(name: string, animal: string) {
    this._snackBar.open(name, animal, {
      duration: 2000,
    });
  }

}
