

const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "Joker"];
const suits = ["diamonds", "hearts", "spades", "clubs"];
var deck = new Array();
var hand = []; // Array to store the hand

var students = [];

function getDeck()
{
  var deck = new Array();

  for(var i = 0; i < suits.length; i++)
  {
    for(var x = 0; x < cards.length; x++)
    {
      var card = {Value: cards[x], Suit: suits[i]};
      deck.push(card);
    }
  }

  return deck;
}

function shuffle()
{
  // for 1000 turns
  // switch the values of two random cards
  for (var i = 0; i < 1000; i++)
  {
    var location1 = Math.floor((Math.random() * deck.length));
    var location2 = Math.floor((Math.random() * deck.length));
    var tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }

  // renderDeck();
}

function renderDeck() {
  // Clear previous content of the deck
  document.getElementById('deck').innerHTML = '';

  // Create an h1 element
  var heading = document.createElement("h1");
  heading.textContent = "A Deck of Cards";
  document.getElementById("deck").appendChild(heading);

  // Loop through the deck array to create and append card elements
  for (var i = 0; i < deck.length; i++) {
    var card = document.createElement("div");
    var value = document.createElement("div");
    var suit = document.createElement("div");
    card.className = "card";
    value.className = "value";
    suit.className = "suit " + deck[i].Suit;

    value.innerHTML = deck[i].Value;
    card.appendChild(value);
    card.appendChild(suit);

    document.getElementById("deck").appendChild(card);
  }
}

function load()
{
  deck = getDeck();
  shuffle();
  // renderDeck();
  dealCard(deck)
  let card = dealCard(deck);
  // console.log(card)
}

window.onload = load;

// function dealCard(deck){
//   return deck.pop();
// }

function dealCard(deck) {
  // Deal a card from the deck
  var card = deck.pop();
  
  // Add the dealt card to the hand
  hand.push(card);
  
  // Render the hand
  renderHand();
  
  // Return the dealt card (optional)
  return card;
}

function renderHand() {
  // Clear previous content of the hand
  document.getElementById('hand').innerHTML = '';

  // Create an h1 element
  var heading = document.createElement("h1");
  heading.textContent = "Cards";
  document.getElementById("hand").appendChild(heading);

  // Loop through the hand array to create and append card elements
  for (var i = 0; i < hand.length; i++) {
    var card = document.createElement("div");
    var value = document.createElement("div");
    var suit = document.createElement("div");
    card.className = "card";
    value.className = "value";
    suit.className = "suit " + hand[i].Suit;

    value.innerHTML = hand[i].Value;
    card.appendChild(value);
    card.appendChild(suit);

    document.getElementById("hand").appendChild(card);
  }
}


