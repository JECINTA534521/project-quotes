import { Component, OnInit, Input } from '@angular/core';
import { Quote} from '../quote';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {
  @Input() quote: Quote;
  upvotes = 0;
  downvotes = 0;

  constructor() { }

  ngOnInit() {
  }

}
