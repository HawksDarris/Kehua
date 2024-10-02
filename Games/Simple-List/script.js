(function() {

  const buttonContainer = document.getElementById('buttonContainer');
  const studentsContainer = document.getElementById('studentsContainer');

  // Function to create class buttons
  const createClassButtons = (classArray) => {
    classArray.forEach((classGroup) => {
      let button = document.createElement('button');
      button.innerText = classGroup.name;
      button.className = 'chooseClassButton';

      // When class button is clicked, generate the students sheet
      button.addEventListener('click', () => generatestudentsSheet(classGroup.students));

      buttonContainer.appendChild(button);
    });
  };

  // Function to generate students sheet for students
  const generatestudentsSheet = (students) => {
    studentsContainer.innerHTML = ''; // Clear previous students
    students.forEach(student => {
      let studentDiv = document.createElement('div');
      studentDiv.innerText = student;
      studentDiv.className = 'student absent'; // By default, mark as absent

      // Toggle students status on click
      studentDiv.addEventListener('click', () => {
        if (studentDiv.classList.contains('absent')) {
          studentDiv.classList.remove('absent');
          studentDiv.classList.add('present');
        } else {
          studentDiv.classList.remove('present');
          studentDiv.classList.add('absent');
        }
      });

      studentsContainer.appendChild(studentDiv);
    });
  };

  createClassButtons(G5);
  createClassButtons(G6);
  createClassButtons(clubs);

})();
