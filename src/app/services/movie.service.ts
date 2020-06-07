import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }
  getMovieBySearchTerm(query) {
    return this.http.get(`https://www.omdbapi.com/?apikey=4323a36&s=${query}`).pipe(map((res: any) => res));;
  }
}