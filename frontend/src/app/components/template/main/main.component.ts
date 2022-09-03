import { SharedServiceDeleteService } from './../../../services/shared-service-delete.service';
import { SharedServiceUpdateService } from './../../../services/shared-service-update.service';
import { ProductCreateComponent } from './product-create/product-create.component';
import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from './../../../services/shared-service.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  constructor(private sharedService: SharedServiceService, 
    private sharedServiceUpdate: SharedServiceUpdateService,
    private sharedServiceDelete: SharedServiceDeleteService) {
    this.sharedService.event.subscribe(() => {
      this.showSnackbarCreated();
    });

    this.sharedServiceUpdate.event.subscribe(() => {
      this.showSnackbarUpdated();
    });

    this.sharedServiceDelete.event.subscribe(()=>{
      this.showSnackbarDeleted();
    }); 
  }

  ngOnInit(): void {
  }

  showSnackbarCreated(): void {
    const snackbarCreated = document.querySelector('app-snackbar-created');
    snackbarCreated?.classList.add('show');
    setTimeout(this.removeSnackbarCreated, 2500);
  }

  removeSnackbarCreated(): void {
    const snackbarCreated = document.querySelector('app-snackbar-created');
    snackbarCreated?.classList.remove('show');
  }

  showSnackbarUpdated(): void {
    const snackbarUpdated = document.querySelector('app-snackbar-updated');
    snackbarUpdated?.classList.add('show');
    setTimeout(this.removeSnackbarUpdated, 2500);
  }

  removeSnackbarUpdated(): void {
    const snackbarUpdated = document.querySelector('app-snackbar-updated');
    snackbarUpdated?.classList.remove('show');
  }

  showSnackbarDeleted(): void {
    const snackbarDeleted = document.querySelector('app-snackbar-deleted');
    snackbarDeleted?.classList.add('show');
    setTimeout(this.removeSnackbarDeleted, 2500);
  }

  removeSnackbarDeleted(): void {
    const snackbarDeleted = document.querySelector('app-snackbar-deleted');
    snackbarDeleted?.classList.remove('show');
  }

}
