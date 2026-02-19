import { Component, OnDestroy, OnInit, WritableSignal } from '@angular/core';
import { Movie } from '../../models/Movie';
import { MovieApi } from './service/movie-api';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { MovieItem } from './movie-item/movie-item';
import { signal } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  imports: [MovieItem],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList implements OnInit, OnDestroy {
  movieList: WritableSignal<Movie[]> = signal<Movie[]>(new Array<Movie>());
  private subscription: Subscription = new Subscription();
  constructor(private api: MovieApi) {}
  ngOnInit(): void {
    console.log("MovieList initialized");
    this.onGetMovieList();
  }
    onGetMovieList(): void {
      this.subscription.add(
        this.api.getMovieList().subscribe({
          next: (movieList: Movie[]): void => {
            this.movieList.set(movieList);
          },
            error: (e: HttpErrorResponse) => {
          throw Error(
            `Cannot connect to API: Error: ${e.status} - ${e.message}`
          );
        }
      })
    );
  }
 ngOnDestroy(): void {
  this.subscription.unsubscribe();
 }
}
