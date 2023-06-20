module.exports = { update: update, name: "Raise on high pair bot" };

function update(game) {
  var hand = game.self.cards;
  var card1 = hand[0];
  var card2 = hand[1];
  var highCards = ["A", "K", "Q", "J"];

  var isPair = card1[0] == card2[0];
  var isHighPair = highCards.indexOf(card1[0]) > -1; // assumes isPair == true

  if (isPair && isHighPair) {
    return game.betting.raise;
  } else if (isPair) {
    return game.betting.call;
  } else {
    return 0;
  }
}
