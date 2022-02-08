import { Component, Input, OnInit } from '@angular/core';
import { movieInterface } from '../_interface/movie.interface';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  @Input() movie: movieInterface | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
