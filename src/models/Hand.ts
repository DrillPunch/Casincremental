import Card from './Card';

export default class Hand {
    _cards: Card[];

    constructor () {
        this._cards = [];
    }

    add (card: Card) {
        this._cards.push(card);
    } 

    clear () {
        this._cards = [];
    }

    get cards () {
        return this._cards;
    }
}