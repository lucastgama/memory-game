const cardArray = [
  {
    name: "cat",
    img: "assets/cat.png",
  },
  {
    name: "dog",
    img: "assets/dog.png",
  },
  {
    name: "lion",
    img: "assets/lion.png",
  },
  {
    name: "monk",
    img: "assets/monk.png",
  },
  {
    name: "mouse",
    img: "assets/mouse.png",
  },
  {
    name: "owl",
    img: "assets/owl.png",
  },
  {
    name: "cat",
    img: "assets/cat.png",
  },
  {
    name: "dog",
    img: "assets/dog.png",
  },
  {
    name: "lion",
    img: "assets/lion.png",
  },
  {
    name: "monk",
    img: "assets/monk.png",
  },
  {
    name: "mouse",
    img: "assets/mouse.png",
  },
  {
    name: "owl",
    img: "assets/owl.png",
  },
];
cardArray.sort(() => Math.random() - 0.5);

const gridDisplay = document.querySelector("#grid");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];
const result = document.querySelector("#result");
let score = 0;

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("class", "card");
    card.setAttribute("src", "assets/blank.png");
    card.setAttribute("alt", "vazio");

    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);

    gridDisplay.appendChild(card);
  }
}

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");

  if (cardsChosen[0] === cardsChosen[1]) {
    score++;
    cards[cardsChosenIds[0]].removeEventListener("click", flipCard);
    cards[cardsChosenIds[1]].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
    result.innerText = score;
  } else {
    cards[cardsChosenIds[0]].setAttribute("src", "assets/blank.png");
    cards[cardsChosenIds[1]].setAttribute("src", "assets/blank.png");
    cards[cardsChosenIds[0]].addEventListener("click", flipCard);
    cards[cardsChosenIds[1]].addEventListener("click", flipCard);
  }
  cardsChosen = [];
  cardsChosenIds = [];
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  this.setAttribute("alt", cardArray[cardId].name);
  this.removeEventListener("click", flipCard);

  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 300);
  }
}

createBoard();
