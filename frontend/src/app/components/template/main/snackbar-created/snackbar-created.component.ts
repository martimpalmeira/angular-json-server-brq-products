import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-snackbar-created',
  templateUrl: './snackbar-created.component.html',
  styleUrls: ['./snackbar-created.component.css']
})
export class SnackbarCreatedComponent implements OnInit {

  @Output() removeSnackbarCreated: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void{
    this.removeSnackbarCreated.emit();
  }


}
