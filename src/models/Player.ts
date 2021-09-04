import Card from './Card';
import Hand from './Hand';

export default class Player {
    _hand: Hand;

    constructor () {
        this._hand = new Hand();
    }

    get hand() {
        return this._hand;
    }

    addToHand(card: Card) {
        this._hand.add(card);
    }
}