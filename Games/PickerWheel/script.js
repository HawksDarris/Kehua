(function() {

  let wheel = document.querySelector('.wheel');
  let spinBtn = document.querySelector('.spinBtn');
  let chosenSpan = document.querySelector('.chosen');
  let value = Math.ceil(Math.random() * 3600);
  let changeClassButtonsContainer = document.getElementById('buttonContainer'); // Ensure the button container is selected

  // Array of students for each slice
  const students = [];

  // Function to populate the wheel with students from the chosen class
  const makeWheel = (chosenClassStudents) => {
    students.length = 0; // Empty out the students array
    const classStudents = [...chosenClassStudents]; // Create a copy to avoid modifying the original array
    for (let i = 0; i < 8; i++) {
      let x = getRandomInt(classStudents.length);
      students.push(classStudents[x]);
      document.querySelector(`.name${i + 1} span`).innerText = classStudents[x];
      classStudents.splice(x, 1); // Remove selected student to avoid duplicates
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
  const createClassButtons = (classArray) => {
    classArray.forEach((classGroup) => {
      let button = document.createElement("button");
      button.innerText = classGroup.name; // Set button text as class name
      button.className = 'chooseClassButton';

      // Event listener for each button
      button.addEventListener("click", () => makeWheel(classGroup.students)); // Pass the students array

      // Append the button to the container
      changeClassButtonsContainer.appendChild(button);
    });
  }

  createClassButtons(G5);
  createClassButtons(G6);
  createClassButtons(clubs);

  function displayChosen() {
    const wheelRotation = (value % 360 + 360) % 360;
    const topPosition = (360 - wheelRotation) % 360;
    let selectedIndex = Math.floor((topPosition + 22.5) / 45) % 8; // Adjust for the wheel slice
    chosenSpan.innerHTML = students[selectedIndex];
  }

})();
