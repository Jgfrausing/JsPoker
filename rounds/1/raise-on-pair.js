module.exports = { update: update, name: "Raise on pair bot" };

function update(game) {
  var hand = game.self.cards;
  var card1 = hand[0];
  var card2 = hand[1];
  if (game.state == "pre-flop") {
    // raises preflop if pair folds otherwise
    if (card1[0] == card2[1]) {
      return game.betting.raise;
    } else {
      return 0;
    }
    // in following rounds we call if cheap otherwise we fold
  } else if (game.betting.call < 10) {
    return game.betting.call;
  } else {
    return 0;
  }
}
