import _ from 'lodash';
import Card, { CardNumber, Suit } from './Card';

export default class Deck {
  _cards: Card[] = [];

  constructor(deckCount: number = 1) {
    for (let i = 0; i < deckCount; i += 1) {
      for (const suit in Suit) {
        for (const number in CardNumber) {
          this._cards.push(
            new Card(
              Suit[suit as keyof typeof Suit],
              CardNumber[number as keyof typeof CardNumber],
            ),
          );
        }
      }
    }
  }

  get cards(): Card[] {
    return this._cards;
  }

  shuffle(): void {
    this._cards = _.shuffle(this._cards);
  }

  draw(): Card | undefined {
    return this._cards.pop();
  }

  emptyDeck(): void {
    this._cards = [];
  }
}
