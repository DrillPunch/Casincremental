import _ from 'lodash';
import Card, { CardNumber, Suit } from './Card';

export default class Deck {
    _cards: Card[] = [];

    constructor (deckCount: number = 1) {
        for (let i = 0; i < deckCount; i++) {
            for (const suit in Suit) {
                for (const number in CardNumber) {
                    this._cards.push(
                        new Card(
                            Suit[suit as keyof typeof Suit],
                            CardNumber[number as keyof typeof CardNumber
                        ])
                    );
                }
            }
        }
    }

    get cards () {
        return this._cards;
    }

    shuffle() {
        this._cards = _.shuffle(this._cards);
    }

    draw = (): any => {
        return this._cards.pop();
    }
    
    emptyDeck () {
        this._cards = [];
    }
}