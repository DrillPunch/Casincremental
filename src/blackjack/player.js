class player {
    constructor () {
        this.hand = new hand();
    }

    addCard (card) {
        this.hand.addCard(card);
    }

    getHand () {
        return this.hand.getHand();
    }

    deal (deck, players, cards = 2) {
        for (var j = 0; j < cards; j++) {
            for (var i = 0; i < players.length; i++) {
                players[i].addCard(deck.drawCard());
            }
        }
    }
}