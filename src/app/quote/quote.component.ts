import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.', 'Albert Einstein', 'Mohamed Hassan', new Date(2019, 0, 7)),
    new Quote(2, 'I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.', 'Bill Gates', 'Mohamed Hassan', new Date(2019, 0, 3)),
    new Quote(3, 'The future belongs to those who prepare for it today.', 'Malcolm X', 'Xavi Alonso', new Date(2019, 0, 1)),
    new Quote(4, 'It always seems impossible until it’s done.', ' Nelson Mandela', 'Alisson Becker', new Date(2019, 0, 9)),
  ]
  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}
