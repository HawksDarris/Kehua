(function () {

  const makeModal = () => {
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Do you want 5 points or do you want to reveal the card?';

    const revealButton = document.createElement('button');
    revealButton.id = 'reveal';
    revealButton.textContent = 'Reveal!';

    const fivePointsButton = document.createElement('button');
    fivePointsButton.id = 'fivePoints';
    fivePointsButton.textContent = 'Five points!';

    modalContent.appendChild(paragraph);
    modalContent.appendChild(revealButton);
    modalContent.appendChild(fivePointsButton);

    // Append modal content to modal
    modal.appendChild(modalContent);

    // Append modal to the document body
    document.body.appendChild(modal);
    // (not sure if all that appending is necessary, but that's the only way I could make it work in a short time)
  };

  document.addEventListener("DOMContentLoaded", function () {
    const cardConfig = {
      'GrenadeCat.png': 5,
      'TnTCat.png': 11,
      '3ptCat.png': 9,
      'tacocat.png': 6,
      'AvocadoCat.png': 5,
      'Nuclear.png': 2,
      'LosePoints.png': 20,
      'ChangePoints.png': 20,
      'Bomb.png': 9,
    };

    let cards = [];

    for (const [imageName, count] of Object.entries(cardConfig)) {
      for (let i = 0; i < count; i++) {
	cards.push(imageName);
      }
    }

    let shuffledCards = [];

    function showModal(callback) {
      const modal = document.getElementById('modal');
      modal.style.display = 'block';

      const revealBtn = document.getElementById('reveal');
      const fivePointsBtn = document.getElementById('fivePoints');

      revealBtn.addEventListener('click', () => {
	modal.style.display = 'none';
	callback(true); // Reveal
      });

      fivePointsBtn.addEventListener('click', () => {
	modal.style.display = 'none';
	callback(false); // Five points
      });
    }
    function shuffle(array) {
      let currentIndex = array.length, temporaryValue, randomIndex;

      while (0 !== currentIndex) {
	randomIndex = Math.floor(Math.random() * currentIndex);
	currentIndex -= 1;

	temporaryValue = array[currentIndex];
	array[currentIndex] = array[randomIndex];
	array[randomIndex] = temporaryValue;
      }

      return array;
    }

    function renderCards() {
      const cardContainer = document.getElementById('cardContainer');
      cardContainer.innerHTML = '';

      shuffledCards.forEach((card, index) => {
	const div = document.createElement('div');
	div.className = 'card';
	div.dataset.index = index;

	const figcaption = document.createElement('figcaption');
	figcaption.textContent = index + 1;

	div.appendChild(figcaption);

	cardContainer.appendChild(div);
      });
    }

function selectCard(index) {

      if (shuffledCards[index] === 'LosePoints.png') {
	handleLosePoints(index);
      } else if (shuffledCards[index] === 'ChangePoints.png') {
	handleChangePoints(index);
      } else if (shuffledCards[index] === 'Bomb.png') {
	handleBomb(index);
      } else if (shuffledCards[index] === 'Nuclear.png') {
	handleNuke(index);
      } else {
	makeFlipped(index);
	document.getElementById('draw').play();
      }
    } 

    function makeFlipped(index) {
      const card = document.querySelector(`.card[data-index="${index}"]`);
      card.classList.add('flipped');
      setTimeout(() => {
	card.style.backgroundImage = `url('${shuffledCards[index]}')`;}, 300);
    }

    function handleBomb(index) {
      document.getElementById('bombSound').play();
      shakeScreen();
      makeFlipped(index);
    }

    function handleNuke(index) {
      document.getElementById('nuclearSound').play();
      shakeScreen();
      makeFlipped(index);
    }

    function handleLosePoints(index) {
      const card = document.querySelector(`.card[data-index="${index}"]`);
      showModal(choice => {
	if (choice) {
	  card.classList.add('flipped');
	  setTimeout(() => {
	    card.style.backgroundImage = `url('${shuffledCards[index]}')`; }, 300);
	document.getElementById('losePoints').play();
    } else {
	  setTimeout(() => {
	    card.style.backgroundImage = `url('${shuffledCards[index]}')`; }, 300);
	  card.classList.add('flipped');
	  card.classList.add('unclickable');
	document.getElementById('draw').play();
	}
      })
    }

    function handleChangePoints(index) {
      const card = document.querySelector(`.card[data-index="${index}"]`);
      showModal(choice => {
	if (choice) {
	  card.classList.add('flipped');
	  setTimeout(() => {
	    card.style.backgroundImage = `url('${shuffledCards[index]}')`; }, 300);
	document.getElementById('changePoints').play();
      } else {
	setTimeout(() => {
	  card.style.backgroundImage = `url('${shuffledCards[index]}')`; }, 300);
	  card.classList.add('flipped');
	  card.classList.add('unclickable');
	}
	document.getElementById('draw').play();
      })
    }

    function shakeScreen() {
      const cardContainer = document.getElementById('cardContainer');
      cardContainer.classList.add('shake');
	setTimeout(() => {
	  cardContainer.classList.remove('shake');
	}, 3000); // Duration of the shake animation

      setTimeout(() => {
	  shuffleDeck();
	  renderCards();
	}, 3000);
    }

    function shuffleDeck() {
      shuffledCards = shuffle(cards.slice());
    }

    function handleClick(event) {
      const index = event.target.dataset.index;
      if (!index) return;
      selectCard(index);
    }

    shuffleDeck();
    renderCards();
    document.getElementById('cardContainer').addEventListener('click', handleClick);

  makeModal();
  })
})();


