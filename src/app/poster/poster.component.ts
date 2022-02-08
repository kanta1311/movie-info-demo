import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

  @Input() imageUrl:string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
