import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {  DialogData } from "../page/page.component";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Movie } from '../models/movie';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  user = { username:'wed', password:'nesday' };
  ata={ name:'yo',review:"working??"}

  constructor(public dialogRef: MatDialogRef< ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public s_data: DialogData,
     public _snackBar: MatSnackBar) { }

     onSubmit(){
       console.log('ata: ',this.user);
       this.dialogRef.close();
     }
    /*onNoClick(): void {
      this.dialogRef.close();
    }*/

    openSnackBar(name: string, review: string) {
      this._snackBar.open(name, review, {
        duration: 2000,
      });
    }

  ngOnInit() {
  }

}
