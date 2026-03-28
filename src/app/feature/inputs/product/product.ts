import { Component,input,Input } from '@angular/core';
import { Product } from '../../../core/models/product.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {
  product = input<Product>();
}

