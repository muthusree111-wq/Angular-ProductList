import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private quotes: string[] = [
    'Believe you can and you are halfway there.',
    'Great things never come from comfort zones.',
    'Success is the sum of small efforts.',
    'Dream big and dare to fail.',
    'The secret of getting ahead is getting started.'
  ];

  getRandomQuote(): string {
    const index = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[index];
  }
}