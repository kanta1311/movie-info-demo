import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { movieInterface } from '../_interface/movie.interface';

@Component({
  selector: 'app-movie-catalogue',
  templateUrl: './movie-catalogue.component.html',
  styleUrls: ['./movie-catalogue.component.css']
})
export class MovieCatalogueComponent implements OnInit {

  @Input() movieListData: movieInterface[] | undefined;
  selectedMovie: movieInterface | undefined;
  constructor(public movieService: MoviesService) {
    this.movieListData = this.movieService.list();

  }

  ngOnInit():void {
    this.selectedMovie = this.movieListData && this.movieListData[0];
    }

  onMovieSelected(movie: movieInterface) {
    this.selectedMovie = movie;

  }

}
