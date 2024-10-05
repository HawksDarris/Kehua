(function () {

  const makeModal = () => {
    // Create the modal content element
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    // Create the paragraph element
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Do you want 5 points or do you want to reveal the card?';

    // Create the Reveal button
    const revealButton = document.createElement('button');
    revealButton.id = 'reveal';
    revealButton.textContent = 'Reveal!';

    // Create the Five Points button
    const fivePointsButton = document.createElement('button');
    fivePointsButton.id = 'fivePoints';
    fivePointsButton.textContent = 'Five points!';

    // Append paragraph and buttons to modal content
    modalContent.appendChild(paragraph);
    modalContent.appendChild(revealButton);
    modalContent.appendChild(fivePointsButton);

    // Append modal content to modal
    modal.appendChild(modalContent);

    // Append modal to the document body
    document.body.appendChild(modal);
  };

  document.addEventListener("DOMContentLoaded", function () {
    const cardConfig = {
      './images/Games/GrenadeCat.png': 5,
      './images/Games/TnTCat.png': 11,
      './images/Games/3ptCat.png': 9,
      './images/Games/tacocat.png': 6,
      './images/Games/AvocadoCat.png': 5,
      './images/Games/Nuclear.png': 2,
      './images/Games/LosePoints.png': 3,
      './images/Games/ChangePoints.png': 2,
      './images/Games/Bomb.png': 9,
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


    function flipCard(index) {
      const card = document.querySelector(`.card[data-index="${index}"]`);

      if (shuffledCards[index] === './images/Games/LosePoints.png' || shuffledCards[index] === 'ChangePoints.png') {
        showModal(choice => {
          if (choice) {
            // Player chose to reveal the card
            card.classList.add('flipped');
            setTimeout(() => {
              card.style.backgroundImage = `url('${shuffledCards[index]}')`; }, 300);
            playCardSound(index);
          } else {
            // Player chose not to reveal the card
            setTimeout(() => {
              card.style.backgroundImage = `url('${shuffledCards[index]}')`; }, 300);
	      card.classList.add('flipped');
            // card.style.backgroundImage = 'none';
	    // TODO make a sound like *wompwomp* if it was change points and *chaching* if it was lose points.
	    document.getElementById('draw').play();
            card.classList.add('unclickable');
          }
        });
      } else {
        // Normal card flip
        card.classList.add('flipped');
        setTimeout(() => {
          card.style.backgroundImage = `url('${shuffledCards[index]}')`; playCardSound(index); }, 300);
      }

      if (shuffledCards[index] === './images/Games/Bomb.png' || shuffledCards[index] === './images/Games/Nuclear.png') {
        // Shake the card container when a bomb or nuclear card is clicked
        const cardContainer = document.getElementById('cardContainer');
        cardContainer.classList.add('shake');
        setTimeout(() => {
          cardContainer.classList.remove('shake');
        }, 3000); // Duration of the shake animation

        setTimeout(() => {
          shuffleDeck();
          renderCards();
        }, 3000);

        playCardSound(index) ;
      }
    }

    function playCardSound(index) {
      if (shuffledCards[index] === './images/Games/LosePoints.png') {
        document.getElementById('losePoints').play();
      } else if (shuffledCards[index] === './images/Games/ChangePoints.png') {
        document.getElementById('changePoints').play();
      } else if (shuffledCards[index] === './images/Games/Bomb.png') {
        document.getElementById('bombSound').play();
      } else if (shuffledCards[index] === './images/Games/Nuclear.png') {
        document.getElementById('nuclearSound').play();
      }
      else {
        document.getElementById('draw').play();
      }
    }

    function shuffleDeck() {
      shuffledCards = shuffle(cards.slice());
    }

    function handleClick(event) {
      const index = event.target.dataset.index;
      if (!index) return;
      flipCard(index);
    }

    shuffleDeck();
    renderCards();
    document.getElementById('cardContainer').addEventListener('click', handleClick);
  })
  makeModal();
})();


