import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-snackbar-updated',
  templateUrl: './snackbar-updated.component.html',
  styleUrls: ['./snackbar-updated.component.css']
})
export class SnackbarUpdatedComponent implements OnInit {

  @Output() removeSnackbarUpdated: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void{
    this.removeSnackbarUpdated.emit();
    
  }

}
