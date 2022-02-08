import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { movieInterface } from '../_interface/movie.interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() movieListData: movieInterface[] | undefined;
  @Output() movieItemSelectedEvent = new EventEmitter();
  selectedId: number | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.selectedId = this.movieListData && this.movieListData[0].id;
  }

  onClick(movie: movieInterface){
    this.movieItemSelectedEvent.emit(movie)
    this.selectedId = movie.id;
  }

}
