(function() {

  let wheel = document.querySelector('.wheel');
  let spinBtn = document.querySelector('.spinBtn');
  let chosenSpan = document.querySelector('.chosen');
  let value = Math.ceil(Math.random() * 3600);
  let changeClassButtons = document.querySelectorAll('.chooseClassButton');

  // Array of students for each slice
  const students = [];

  // Function to populate the wheel with students from the chosen class
  const makeWheel = (chosenClass = G7C6) => {
    students.length = 0; // Empty out the students array 
    for (let i = 0; i < 8; i++) {
      let x = getRandomInt(chosenClass.length);
      students.push(chosenClass[x]);
      document.querySelector(`.name${i + 1} span`).innerText = chosenClass[x];
      chosenClass.splice(x, 1);
    }
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  spinBtn.onclick = function() {
    // spinBtn.style.pointerEvents = 'none';
    value += 3600 + Math.ceil(Math.random() * 3600);
    wheel.style.transform = `rotate(${value}deg)`;
    wheel.style.transition = `transform 5s ease-in-out`;
    setTimeout(displayChosen, 5000);
  }

  changeClassButtons.forEach(button => {
    button.onclick = function() {
      let buttonValue = this.innerText; 
      switch (buttonValue) {
        case "G7C1":
          makeWheel(G7C1);
          break;
        case "G7C2":
          makeWheel(G7C2);
          break;
        case "G7C2":
          makeWheel(G7C2);
          break;
        case "G7C3":
          makeWheel(G7C3);
          break;
        case "G7C3":
          makeWheel(G7C3);
          break;
        case "G7C4":
          makeWheel(G7C4);
          break;
        case "G7C5":
          makeWheel(G7C5);
          break;
        case "G7C6":
          makeWheel(G7C6);
          break;
        case "G7C7":
          makeWheel(G7C7);
          break;
        case "G7C8":
          makeWheel(G7C8);
          break;
          // 6th Grade
        case "G6C2":
          makeWheel(G6C2);
          break;
        case "G6C5":
          makeWheel(G6C5);
          break;
        case "G6C6":
          makeWheel(G6C6);
          break;
        case "G6C7":
          makeWheel(G6C7);
          break;
        case "G6C8":
          makeWheel(G6C8);
          break;
        default:
          break;
      }
    }
  });

  function displayChosen() {
    const wheelRotation = (value % 360 + 360) % 360;
    // Calculate the position of the top of the wheel relative to the starting position
    const topPosition = (360 - wheelRotation) % 360;
    // Calculate the index of the wedge closest to the top position
    let selectedIndex = Math.floor((topPosition + 22.5) / 45) % 8; // 22.5 degrees is half the wedge angle
    // Update the chosen student in the UI
    chosenSpan.innerHTML = students[selectedIndex];
  }

  makeWheel(); // Initialize wheel with default class

})();
