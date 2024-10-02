(function() {

  let wheel = document.querySelector('.wheel');
  let spinBtn = document.querySelector('.spinBtn');
  let chosenSpan = document.querySelector('.chosen');
  let value = Math.ceil(Math.random() * 3600);
  let changeClassButtonsContainer = document.getElementById('buttonContainer');

  // Array of students for each slice
  const students = [];

  // Function to populate the wheel with students from the chosen class
  const makeWheel = (chosenClass) => {
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
    document.getElementById('wheelSound').play();
    value += 360 + Math.ceil(Math.random() * 3600);
    wheel.style.transform = `rotate(${value}deg)`;
    wheel.style.transition = `transform 5s ease-in-out`;
    setTimeout(displayChosen, 5000);
  }

  // Function to create buttons dynamically for each class in a grade
  const createClassButtons = (classArray, grade) => {
    classArray.forEach((classGroup, index) => {
      let button = document.createElement("button");
      button.innerText = `${grade}C${index + 1}`;
      button.className = 'chooseClassButton';

      // Event listener for each button
      button.addEventListener("click", () => makeWheel(classGroup));

      // Append the button to the container
      changeClassButtonsContainer.appendChild(button);
    });
  }

  // Create buttons for both Grade 5 and Grade 6
  createClassButtons(G5, "G5");
  createClassButtons(G6, "G6");

  function displayChosen() {
    const wheelRotation = (value % 360 + 360) % 360;
    const topPosition = (360 - wheelRotation) % 360;
    let selectedIndex = Math.floor((topPosition + 22.5) / 45) % 8; // Adjust for the wheel slice
    chosenSpan.innerHTML = students[selectedIndex];
  }

})();
