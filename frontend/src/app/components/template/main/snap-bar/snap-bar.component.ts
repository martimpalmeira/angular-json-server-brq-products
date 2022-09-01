import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-snap-bar',
  templateUrl: './snap-bar.component.html',
  styleUrls: ['./snap-bar.component.css']
})
export class SnapBarComponent implements OnInit {

  @Output() removeSnap: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void{
    this.removeSnap.emit();
  }


}
