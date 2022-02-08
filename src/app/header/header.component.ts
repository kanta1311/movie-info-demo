import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string | undefined;
  @Output() movieItemSelectedEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.movieItemSelectedEvent.emit("Thanks for clicking")
  }

}
