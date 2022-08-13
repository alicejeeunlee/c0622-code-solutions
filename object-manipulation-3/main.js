console.log('Lodash is loaded:', typeof _ !== 'undefined');

// create Player constructor function
// to have property name and hand intiated to empty array (will push cards into hand)

function Player(name) {
  this.name = name;
  this.hand = [];
}

// make function to create deck of cards
// make deck variable initiated to empty array to hold cards
// make array of all suits and values possible for card
// loop through suit
//   loop through values
// make card object with property rank and suit
//   assign rank to values[k]
//   assign suit to suits[i]
// push card to deck
// return deck

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

// create playerList and initiate to empty array
// loop through array of players (names) to call Player constructor function on each player
//   push each created player object to playerList
// create new deck by calling makeDeck fx
// shuffle deck by calling lodash shuffle method
// create index to keep track of shuffledDeck[index]
// loop based on numOfCards to deal (how many loops to run)
//   loop through each player in PlayerList
//     push shuffledDeck from index 0 to each player's hand
//     increment index
// create data model to keep track of card point system
// loop through playerList
//   create score variable initiated to 0 to keep track of total score
//   add to score based on value of each card in hand
// initiate winner to first player
//   loop through player list
//     if winner score is less than current player score,
//       reassign winner to current player
// console.log winner

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
  console.log('WINNER!', winner.name);
}

playGame(['Donatello', 'Leonardo', 'Michaelangelo', 'Raphael'], 2);
