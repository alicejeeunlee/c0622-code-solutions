console.log('Lodash is loaded:', typeof _ !== 'undefined');

function playGame(players, numOfCards) {
  var playerList = [];
  for (var i = 0; i < players.length; i++) {
    playerList.push(new Player(players[i]));
  }
  var deck = makeDeck();
  return deck;
}

playGame(['Donatello', 'Leonardo', 'Michaelangelo', 'Raphael'], 2);

function Player(name) {
  this.name = name;
  this.hand = [];
}

function makeDeck() {
  var deck = [];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var values = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
  for (var i = 0; i < suits.length; i++) {
    for (var k = 0; k < values.length; k++) {
      var card = {
        rank: values[k],
        suit: suits[i]
      };
      deck.push(card);
    }
  }
  return deck;
}
