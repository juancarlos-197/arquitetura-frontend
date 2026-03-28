import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Child } from '../child/child';
import { Product } from '../../../core/models/product.interface';
import { ProductComponent } from '../../inputs/product/product';
@Component({
  selector: 'app-parent',
  imports: [FormsModule,Child,ProductComponent],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  firstName = 'Juan';
  age = 25;
  products: Product[] = [];
ngOnInit(): void{
}
  addProduct(): void {
    this.products.push({
      id:'30',
      title:'Product 3',
      price:33400,
      description:'description 3',
      images:['image.jpg']
    });
  }
}
