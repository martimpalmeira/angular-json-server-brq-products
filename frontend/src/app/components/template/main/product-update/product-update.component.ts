import { SharedServiceUpdateService } from 'src/app/services/shared-service-update.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product-create/product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product!: Product;

  constructor(private productService: ProductService, 
    private router: Router, 
    private rout: ActivatedRoute, 
    private sharedServiceUpdate: SharedServiceUpdateService) { }

  ngOnInit(): void {
    const id = this.rout.snapshot.paramMap.get('id');
    this.productService.readById(id!).subscribe(product => {
      this.product = product;
    });
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.router.navigate(['/products']);
      this.sharedServiceUpdate.event.emit();
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
