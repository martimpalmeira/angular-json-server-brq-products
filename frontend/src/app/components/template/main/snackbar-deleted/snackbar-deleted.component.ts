import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-snackbar-deleted',
  templateUrl: './snackbar-deleted.component.html',
  styleUrls: ['./snackbar-deleted.component.css']
})
export class SnackbarDeletedComponent implements OnInit {

  @Output() removeSnackbarDeleted: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void{
    this.removeSnackbarDeleted.emit();
  }

}
