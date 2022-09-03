import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product-create/product.model';
import { SharedServiceDeleteService } from 'src/app/services/shared-service-delete.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product!: Product;

  constructor(private productService: ProductService, 
    private router: Router, 
    private route: ActivatedRoute, 
    private sharedServiceDeleted: SharedServiceDeleteService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id!).subscribe(product => {
      this.product = product;
    });
  }

  deleteProduct() {

    this.productService.delete(this.product.id!).subscribe(() => {
      this.sharedServiceDeleted.event.emit();
    })
    this.router.navigate(["/products"]);
  }

  cancel() {
    this.router.navigate(["/products"]);
  }

}
