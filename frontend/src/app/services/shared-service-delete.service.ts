import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceDeleteService {

  event = new EventEmitter();

  constructor() { }

  getButtonClicked(){
    this.event.emit();
  }
}
