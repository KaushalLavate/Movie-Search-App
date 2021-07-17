import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private messageSource = new BehaviorSubject("Default Messsage");
  currentMessage = this.messageSource.asObservable(); 

  constructor(private http: HttpClient) { }

  getMovieBySearchTerm(query) {
    return this.http.get(`https://www.omdbapi.com/?apikey=4323a36&s=${query}`).pipe(map((res: any) => res));
  }

  getMovieByID(id){
    return this.http.get(`https://www.omdbapi.com/?apikey=4323a36&i=${id}`).pipe(map((res: any) => res));
  }

  changeMovie(movie:string){
    this.messageSource.next(movie);
    
    this.currentMessage.subscribe(res=>{
      console.log(res);
    })
  }

}