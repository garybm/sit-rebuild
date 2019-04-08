import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-recommnended',
  templateUrl: './recommnended.component.html',
  styleUrls: ['./recommnended.component.scss'],
  providers: [ProductService]
})

// export class RecommnendedComponent {
//   products: Observable<any[]>;
//   constructor(db: AngularFirestore) {
//     this.products = db.collection('products').valueChanges();
//   }
// }


export class RecommnendedComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}



// products: Product[] = [
  //   new Product('Bose Home Speaker 500',399.95,'Best in class wall-to-wall stereo sound. Amazon Alexa built in.','Bluetooth'),
  //   new Product('BQC20 noise cancelling headphones – Apple devices',224.95,'Noise cancelling, inline mic/remote, Aware mode','Noise cancelling'),
  //   new Product('A20® Aviation Headset',995.95,'Around-ear, noise reduction, clear audio, audio/communication interface','Noise cancelling'),
  //   new Product('691 in-wall speakers',449.95,'In-wall speakers, SoundTouch compatible','')
  // ];
