(function() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  const display = document.querySelector('.display');
  const chooseChallengeButtons = document.querySelectorAll('.choose-challenge');

  const listening = ["Telephone", "Listen and answer questions", "Listen and summarize", "Listen to a short story then fill in the blanks"];
  const speaking = ["Describe a picture", "Talk about your favorite book", "Vocabulary sentence", "Word association <br> (fire => hot)"];
  const reading = ["Unscramble Vocab", "Read a short story, discuss (in Chinese or English) for one minute, then answer my question"/**/];

  const slices = {
    1: "Frog: Speaking Challenge",
    2: "Snail: Listening Challenge",
    3: "Dolphin: Reading Challenge",
    4: "Ladybug: Pick a Challenge",
    5: "Koala: Listening Challenge",
    6: "Unicorn: Skip Challenge",
    7: "Dragon: Give Challenge to Another Team (You still get points)",
    8: "Snowman: Speaking Challenge",
  }

  let deg = 0;
  let sliceSize = 360/Object.keys(slices).length;

  const generateChallenge = (resultNumber, fromWheel) => {
    const resultText = slices[resultNumber];
    let challengeText = "";
    if (resultText.includes("Listening Challenge")) {
      challengeText = listening[Math.floor(Math.random() * listening.length)];
    } else if (resultText.includes("Speaking Challenge")) {
      challengeText = speaking[Math.floor(Math.random() * speaking.length)];
    } else if (resultText.includes("Reading Challenge")) {
      challengeText = reading[Math.floor(Math.random() * reading.length)];
      if (challengeText.includes("short story")) {
        challengeText += "<br>" + stories[Math.floor(Math.random() * stories.length)] + "</p><br>";
      }
      if (challengeText.includes("Unscramble Vocab")){
        challengeText += "<br>" + scrambleWord(vocab[Math.floor(Math.random() * vocab.length)]) + "<br>";
      }
    }

    if (fromWheel) {
      display.innerHTML = resultText + ": " + challengeText;
    } else {
      display.innerHTML = challengeText;
    }
    // Add blank lines
    display.innerHTML += "<br><br><br>";
  }

  const handleResult = (actualDeg) => {
    const resultNumber = Math.ceil(actualDeg / sliceSize);
    generateChallenge(resultNumber, true);
  }

  startButton.addEventListener('click', () => {
    display.innerHTML = "-";
    startButton.style.pointerEvent = 'none';
    deg = Math.floor(2000 + Math.random() * 2000);
    wheel.style.transition = 'all 5s ease-out';
    wheel.style.transform = `rotate(${deg}deg)`;
    wheel.classList.add('blur');
    document.getElementById('wheelSound').play();
  })

  wheel.addEventListener('transitionend', () => {
    wheel.classList.remove('blur');
    startButton.style.pointerEvent = 'auto';
    wheel.style.transition = 'none';
    const actualDeg = deg % 360;
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    handleResult(actualDeg);
  })

  chooseChallengeButtons.forEach(button => {
    button.addEventListener('click', () => {
      display.innerHTML = "";
      const challengeType = button.dataset.challengeType;
      if (challengeType === "listening") {
        generateChallenge(2, false);
      } else if (challengeType === "speaking") {
        generateChallenge(1, false);
      } else if (challengeType === "reading") {
        result = reading[Math.floor(Math.random() * reading.length)];
        if (result.includes("Unscramble")) {
          result += "<br>" + scrambleWord(vocab[Math.floor(Math.random() * vocab.length)]) + "\n";
          display.innerHTML = result;
        } else {
          generateChallenge(3, false);
        }
      }
    });
  })
})();
