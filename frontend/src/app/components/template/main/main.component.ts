import { ProductCreateComponent } from './product-create/product-create.component';
import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from './../../../services/shared-service.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  constructor(sharedService: SharedServiceService) {
    sharedService.event.subscribe(() => {
      this.showSnapBar();
    })
  }

  ngOnInit(): void {
  }

  showSnapBar(): void {
    const snapBar = document.querySelector('app-snap-bar');
    snapBar?.classList.add('show');
    setTimeout(this.removeSnapBar, 2500);
  }

  removeSnapBar(): void {
    const snapBar = document.querySelector('app-snap-bar');
    snapBar?.classList.remove('show');
  }

}
