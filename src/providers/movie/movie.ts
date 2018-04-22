import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3/";

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getLastestMovies() {
    return this.http.get(this.baseApiPath + "movie/latest?api_key=1da3f6ebde9bc613cce5a67776cf6fe5");
  }

  getPopularMovies() {
    return this.http.get(this.baseApiPath + "movie/popular?api_key=1da3f6ebde9bc613cce5a67776cf6fe5");
  }

}
