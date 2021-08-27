class deck {
    constructor (deckCount = 1) {
        this.deck = [];
        const suits = ["H", "S", "C", "D"];
        const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        
        for (var i = 0; i < deckCount; i++) {
            for (let suit in suits) {
                for (let card in cards) {
                    this.deck.push(cards[card] + suits[suit]);
                }
            }
        }
    }

    shuffleDeck () {
        var shuffled = this.deck.slice();
        for (var i = 0; i < shuffled.length; i++) {
            var index = Math.floor(Math.random() * shuffled.length);
            var temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        this.deck = shuffled;
    }

    drawCard () {
        return this.deck.pop();
    }
    
    emptyDeck () {
        this.deck.length = 0;
    }

    getCards () {
        return this.deck;
    }

    logCards () {
        console.log(this.deck);
    }
}