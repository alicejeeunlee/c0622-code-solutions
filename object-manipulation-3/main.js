console.log('Lodash is loaded:', typeof _ !== 'undefined');

function playGame(players, numOfCards) {
  var playerList = [];
  for (var i = 0; i < players.length; i++) {
    playerList.push(new Player(players[i]));
  }
  var deck = makeDeck();
  var shuffledDeck = _.shuffle(deck);
  var index = 0;
  for (var j = numOfCards; j > 0; j--) {
    for (var k = 0; k < playerList.length; k++) {
      playerList[k].hand.push(shuffledDeck[index]);
      index++;
    }
  }
  console.log(playerList);
  var cardPoint = {
    ace: 11,
    king: 10,
    queen: 10,
    jack: 10,
    10: 10,
    9: 9,
    8: 8,
    7: 7,
    6: 6,
    5: 5,
    4: 4,
    3: 3,
    2: 2
  };
  for (var x = 0; x < playerList.length; x++) {
    var score = 0;
    score += cardPoint[playerList[x].hand[0].rank];
    score += cardPoint[playerList[x].hand[1].rank];
    playerList[x].score = score;
  }
  var winner = playerList[0];
  for (var y = 0; y < playerList.length; y++) {
    if (winner.score < playerList[y].score) {
      winner = playerList[y];
    }
  }
  console.log(winner.name);
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
