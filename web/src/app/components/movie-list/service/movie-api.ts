import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Movie } from '../../../models/Movie';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class MovieApi {
  readonly API_URL: string = 'http://localhost:8000/api/movies'
  private http: HttpClient = inject(HttpClient);
  constructor() { }
  getMovieList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.API_URL}`);
  }
  deleteMovie(movieId: number): Observable<Movie> {
    return this.http.delete<Movie>(`${this.API_URL}/${movieId}/`)
  }
}
