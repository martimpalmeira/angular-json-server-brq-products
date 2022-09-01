import { ProductService } from '../../../../services/product.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './product.model';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  @Output() showSnap: EventEmitter<any> = new EventEmitter();

  product: Product = {
    name: "",
    price: null as any 
  }

  constructor(private router: Router, private productService: ProductService, private sharedService: SharedServiceService) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.sharedService.event.emit();
      this.router.navigate(['/products']);
    });
  }

}
