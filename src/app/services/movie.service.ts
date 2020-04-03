import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { baseURL,Search } from "../models/movie";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  
}