import { Component, OnInit, } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuoteComponent implements OnInit {



constructor() { }
  quotes = [
    new Quote('SamuelNjiiri', 'Dennis Witley', 'Its not what you are that holds you back.Its what you think you are not.'),
    new Quote('Taneja', 'Greek philosopher', 'Day by day,what we think what we choose, and what we do is who we become.' ),
    new Quote('Jughead', 'Bob Dylan', 'Destiny is a feeling you have that you know something about yourself that no one else knows'),
    // tslint:disable-next-line: max-line-length
    new Quote('Jecinta', 'Jim Rohn', 'Our ultimate life objectives should be to create as much as our talent,ability,and desire will permit')
  ];
  preNum: number;
  lastNum: number;
  counter: number;


  addQuote(chosenQuote) {
    this.quotes.push(chosenQuote);
  }

  upvote(i) {
    this.quotes[i].upvotes ++;
  }
  downvote(i) {
    this.quotes[i].downvotes  ++;
  }
  delQuote(i) {
    this.quotes.splice(i, 1);
  }

  highestUpvote() {
    this.preNum = 0;
    this.lastNum = 0;

    for (this.counter = 0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if (this.lastNum > this.preNum) {this.preNum = this.lastNum; }
    }
    return  this.preNum;
  }

ngOnInit() {
}

}
