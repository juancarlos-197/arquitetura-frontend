import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [FormsModule,Child ],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  firstName = 'Juan';
  age = 25;
  products: any[] = [];

  addProduct(): void {
    this.products.push({
      id:'3',
      title:'Product 3',
      price:300,
      description:'3',
      images:['image.jpg']
    });
  }
}
