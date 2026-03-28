import { Component, input, } from '@angular/core';
import { Product } from '../../../core/models/product.interface';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  firstName = input.required<string>();
  age = input.required<number>();
  products = input.required<Product[]>();

}
