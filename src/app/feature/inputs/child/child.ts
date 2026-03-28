import { Component, input, } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
firstName=input('');
age=input(0);
products=input<any[]>([]);
}
