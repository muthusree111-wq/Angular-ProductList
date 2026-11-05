import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quote-generator',
  standalone: true,
  imports: [],
  templateUrl: './quote-generator.html',
  styleUrl: './quote-generator.css'
})
export class QuoteGeneratorComponent implements OnInit {
  text: string = '';

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.text = this.quoteService.getRandomQuote();
  }
}