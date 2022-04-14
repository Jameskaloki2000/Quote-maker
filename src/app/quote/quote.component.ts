import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  constructor() {}
  quotes: Quote[];

  ngOnInit(): void {
    this.quotes = [
      {
        names: 'John',
        author: 'ANDY',
        quote: 'hbadbs',
        completed: false,
      },
      {
        names: 'John',
        author: 'ANDY',
        quote: 'hbadbs',
        completed: false,
      },
      {
        names: 'John',
        author: 'ANDY',
        quote: 'hbadbs',
        completed: false,
      },
    ];
  }
}
