import { Injectable, EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceUpdateService {

  event = new EventEmitter();

  constructor() { }

  getButtonClicked() {
    this.event.emit();
  }
}
