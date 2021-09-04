export enum Suit {
    Hearts = 'Hearts',
    Spades = 'Spades',
    Clubs = 'Clubs',
    Diamonds = 'Diamonds',
}

export enum CardNumber {
    Two = 'Two',
    Three = 'Three',
    Four = 'Four',
    Five = 'Five',
    Six = 'Six',
    Seven = 'Seven',
    Eight = 'Eight',
    Nine = 'Nine',
    Ten = 'Ten',
    Jack = 'Jack',
    Queen = 'Queen',
    King = 'King',
    Ace = 'Ace',
}

export default class Card {
    _suit: Suit;
    _number: CardNumber;

    constructor (suit: Suit, number: CardNumber) {
        this._suit = suit;
        this._number = number;
    }

    get number() {
        return this._number;
    }

    get suit() {
        return this._suit;
    }
}