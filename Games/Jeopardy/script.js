const categories = ["djeetyet?, and others",
    "Would you rather...",
    "Plot Mountain Questions",
    "Vocabulary from Old Lessons",
    "From the Story"];
const questions = [
  // Each array is the column in the above categories
    [ // Column One
    "Never gonna give you up. Gonna means...",
    "Djeet yet? /dj/ means...",
    "I'mma be here later",
    "Wheredja go?",
    "Shoulda, coulda, woulda, butdja didn't"
  ],
    [ // Column two
    "Would you rather fight 100 duck-sized horses or one horse-sized duck?",
    "Would you rather wet the bed every night or pee your pants every week?",
    "Would you rather hear everyone else's thoughts or have everyone else hear your thoughts?",
    "Would you rather shoot steam out of your ears when you're mad or bark like a dog when you're excited?",
    "Would you rather eat only cat food for the rest of your life or eat whatever you want, but the food has to be 'baby-birded' to you by a stranger?"
  ],
    [ // Column three
    "The part where the characters and setting are described.",
    "The part with all the action, where the stakes are raised",
    "The part where the story starts to end",
    "The turning point",
    "The end"
  ],
    [ // Column Four
    "Sneaky",
    "Ninja",
    "Poison",
    "Literal / Metaphor",
    "Divorce"
  ],
    [ // Column Five
    "Question 5-1",
    "Question 5-2",
    "Question 5-3",
    "Question 5-4",
    "Question 5-5"
  ]
];

const jeopardyBoard = document.getElementById('jeopardy-board');
const modal = document.getElementById('question-modal');
const modalCategory = document.getElementById('modal-category');
const modalValue = document.getElementById('modal-value');
const modalQuestion = document.getElementById('modal-question');
const span = document.getElementsByClassName('close')[0];
const clickSound = document.getElementById('click-sound');

// Generate game board
categories.forEach((category, categoryIndex) => {
    const columnElement = document.createElement('div');
    columnElement.classList.add('category-column');

    const categoryElement = document.createElement('div');
    categoryElement.classList.add('category');
    categoryElement.textContent = category;
    columnElement.appendChild(categoryElement);

    for (let i = 0; i < questions[categoryIndex].length; i++) {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.textContent = `$${(i + 1) * 100}`;
        questionElement.dataset.category = categoryIndex;
        questionElement.dataset.value = (i + 1) * 100;
        questionElement.addEventListener('click', showQuestion);
        columnElement.appendChild(questionElement);
    }

    jeopardyBoard.appendChild(columnElement);
});

// Handle click event for questions
function showQuestion() {
    clickSound.play();
    
    const categoryIndex = this.dataset.category;
    const questionValue = this.dataset.value;
    const question = questions[categoryIndex][questionValue / 100 - 1]; // Retrieve question

    modalCategory.textContent = `Category: ${categories[categoryIndex]}`;
    modalValue.textContent = `Value: $${questionValue}`;
    modalQuestion.textContent = question;

    modal.style.display = 'block';

  this.classList.add('question-answered');
  this.removeEventListener('click', showQuestion);
}

// Close the modal
span.onclick = function() {
    modal.style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

