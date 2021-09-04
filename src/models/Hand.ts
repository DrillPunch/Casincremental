import Card from './Card';

export default class Hand {
  _cards: Card[];

  constructor() {
    this._cards = [];
  }

  add(card: Card) {
    this._cards.push(card);
  }

  clear(): void {
    this._cards = [];
  }

  get cards(): Card[] {
    return this._cards;
  }
}
