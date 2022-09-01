import { ProductService } from './../../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product-create/product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService ) { }

  ngOnInit(): void {
    this.productService.readAll().subscribe(products => {
      this.products = products;
      console.log(this.products);
    });
    
  }

}
