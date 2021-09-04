import Deck from '../../models/Deck';
import Player from '../../models/Player';

const blackjack = () => {
    let dealer = new Player();
    let player1 = new Player();
    let deck = new Deck();
    deck.shuffle();

    let players: Player[] = [];
    players.push(player1);
    players.push(dealer);

    deal(deck, players);

    console.log(dealer.hand);
    console.log(player1.hand);
    console.log(deck.cards);
}

const deal = (deck: Deck, players: Player[], cards = 2): void => {
    for (var j = 0; j < cards; j++) {
        for (var i = 0; i < players.length; i++) {
            players[i].addToHand(deck.draw());
        }
    }
}

export default blackjack