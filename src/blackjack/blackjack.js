function blackjack() {
    console.clear();
    var dealer = new player();
    var player1 = new player()
    var decks = new deck();
    decks.shuffleDeck();

    var players = [];
    players.push(player1);
    players.push(dealer);

    dealer.deal(decks, players);

    console.log(dealer.getHand());
    console.log(player1.getHand());
    console.log(decks.getCards());
}