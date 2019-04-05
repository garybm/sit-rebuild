import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-recommnended',
  templateUrl: './recommnended.component.html',
  styleUrls: ['./recommnended.component.scss']
})
export class RecommnendedComponent implements OnInit {

  productOne: Product[] = [
    new Product('Bose Home',200,'The best product','best festures')

  ];

  constructor() { }

  ngOnInit() {
  }

}
