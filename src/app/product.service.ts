import { Injectable } from '@angular/core';
import { Product } from "./models/product.model";
import { PRODUCTS } from './mock-products';

@Injectable()
export class ProductService {

  constructor() { }
  getProducts() {
    return PRODUCTS;
  }
}
