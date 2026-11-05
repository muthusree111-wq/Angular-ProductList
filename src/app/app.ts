import { Component } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductDetailsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}