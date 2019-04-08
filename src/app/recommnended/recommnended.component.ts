import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-recommnended',
  templateUrl: './recommnended.component.html',
  styleUrls: ['./recommnended.component.scss'],
  providers: [ProductService]
})



export class RecommnendedComponent implements OnInit {
  products: FirebaseListObservable<any[]>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
