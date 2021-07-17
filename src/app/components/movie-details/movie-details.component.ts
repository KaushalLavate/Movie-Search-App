import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import { MovieService } from "../../services/movie.service";
import { ModalComponent } from "../modal/modal.component";
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class MovieDetailsComponent implements OnInit {
  private movie:any;
  review : string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService:MovieService,
    public dialog: MatDialog,
    public _snackBar: MatSnackBar,
  ) {
    route.params.subscribe(params => {
      let movieId = params['movieId']
      
      this.movieService.getMovieByID(movieId).subscribe(res=>{
        this.movie=res;
        this.movie.Genre=this.movie.Genre.split(",");
        console.log(this.movie);
      })
      
    });
   }

  ngOnInit() {
  }

  openDialog(imdbID:string,Title:string): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
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
