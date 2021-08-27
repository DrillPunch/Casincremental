class hand {
    constructor () {
        this.hand = [];
    }

    addCard (card) {
        this.hand.push(card);
    } 

    clearHand () {
        this.hand.length = 0;
    }

    getHand () {
        return this.hand;
    }
}