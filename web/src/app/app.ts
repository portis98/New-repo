import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { Movie } from './components/movie-list'
import { MovieList } from './components/movie-list/movie-list';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MovieList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('web');
}
