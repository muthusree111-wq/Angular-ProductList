import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { QuoteGeneratorComponent } from './quote-generator/quote-generator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProductListComponent,
    QuoteGeneratorComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}