import Deck from '../../models/Deck';
import Player from '../../models/Player';

const deal = (deck: Deck, players: Player[], cards = 2): void => {
  for (let j = 0; j < cards; j += 1) {
    for (let i = 0; i < players.length; i += 1) {
      players[i].addToHand(deck.draw());
    }
  }
};

const blackjack = () => {
  const dealer = new Player();
  const player1 = new Player();
  const deck = new Deck();
  deck.shuffle();

  const players: Player[] = [];
  players.push(player1);
  players.push(dealer);

  deal(deck, players);
};

export default blackjack;
