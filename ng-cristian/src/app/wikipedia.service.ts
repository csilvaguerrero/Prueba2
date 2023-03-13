import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Wikipedia } from './wikipedia';

@Injectable({
  providedIn: 'root'
})

export class WikipediaService {

  constructor(private http: HttpClient) { }


  buscar(url: string){
      return this.http.get(url);
  }
}
