import { Component } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [  MatCardModule, MatButtonModule ],
    templateUrl: './footer.html',

  styleUrl: './footer.css',
})
export class Footer {}
