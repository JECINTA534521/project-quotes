import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote} from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Output() emitQuote = new EventEmitter();
  quoteWords: string;
  quoteEditor: string;
  quoteAuthor: string;
  theWords: any;

  submitQuote() {
    this.theWords = new Quote(this.quoteEditor, this.quoteAuthor, this.quoteWords);
    this.quoteWords = '';
    this.quoteAuthor = '';
    this.quoteEditor = '';
    this.emitQuote.emit(this.theWords);
  }



  constructor() { }

  ngOnInit() {
  }

}
