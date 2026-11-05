import { Component, ChangeDetectorRef, inject } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetailsComponent {

  private cdr = inject(ChangeDetectorRef);

  product: Product | null = null;
  loading = false;
  error = '';

  async getProduct(): Promise<void> {

    this.loading = true;
    this.error = '';
    this.product = null;

    try {
      const response = await fetch(
        'http://localhost:5000/api/products/1'
      );

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      this.product = await response.json() as Product;

    } catch (err) {

      this.error = 'Unable to fetch product details.';
      console.error(err);

    } finally {

      this.loading = false;

      // Notify Angular to refresh the component.
      this.cdr.markForCheck();
    }
  }
}