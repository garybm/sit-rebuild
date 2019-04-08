import { Injectable } from '@angular/core';
import { Product } from "./models/product.model";
import { PRODUCTS } from './mock-products';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProductService {
  products: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.products = database.list('products');
}

  getProducts() {
    return this.products;
  }
}
