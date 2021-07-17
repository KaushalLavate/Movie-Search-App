import { Component, OnInit, Input } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import  * as data from '../../database/movie-list.json';
import { MovieService } from '../../services/movie.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  @Input() movies: any = (data as any).movies;
  review : string;
  isSearch : Boolean = false;
  iconColor : string = "none";
  message:any;

  constructor(private movieService : MovieService,
    public dialog: MatDialog,
    public _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router) { 
      route.params.subscribe(params => {
        let data = params['movieName']
        if(data!=undefined){
          this.getMovies(data);
          this.isSearch=true;
        }
          else{
            console.log("No Wait")
          }
      });
    }

    ngOnInit(){
      this.movieService.currentMessage.subscribe(message=>{
        this.message=message;
        console.log(message,this.message);
      })
  }

  getMovies(moviename:string){
    this.movieService.getMovieBySearchTerm(moviename).subscribe(res=>{
      console.log(res);
      this.movies=res.Search;
    })
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
  bookmark(id,title){
    console.log(id);
    var ids=localStorage.getItem("IDs")+','+id;
    localStorage.setItem("IDs",ids);
    this.openSnackBar(title,status='Added to Watch later');
  }
  bookmarked(id){
    if(localStorage.getItem("IDs")){
      var ids=localStorage.getItem("IDs").split(',');
      if(ids.includes(id))
        return true;
    }
    return false;
  }
  
  removeBookmark(id,title){
    console.log(id);
    var ids=localStorage.getItem("IDs").split(',');
    var index=ids.indexOf(id);
    ids.splice(index,1);
    var idstr=ids.toString();
    localStorage.setItem("IDs",idstr);
    this.openSnackBar(title,status='Removed from Watch later');
  }
}



