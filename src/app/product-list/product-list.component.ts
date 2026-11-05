import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 55000, inStock: true },
    { id: 2, name: 'Keyboard', price: 1500, inStock: true },
    { id: 3, name: 'Mouse', price: 850, inStock: false },
    { id: 4, name: 'Smart Watch', price: 4500, inStock: true },
    { id: 5, name: 'Headphones', price: 2200, inStock: false }
  ];
}