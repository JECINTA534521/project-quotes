export class Quote {
  public upvotes: number;
  public downvotes: number;
  constructor(public name: string, public author: string, public quote: string) {
    this.upvotes = 0;
    this.downvotes = 0;

  }

 }
