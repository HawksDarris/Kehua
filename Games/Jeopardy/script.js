const categories = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"];
const questions = [
    ["Question 1-1", "Question 1-2", "Question 1-3", "Question 1-4", "Question 1-5"],
    ["Question 2-1", "Question 2-2", "Question 2-3", "Question 2-4", "Question 2-5"],
    ["Question 3-1", "Question 3-2", "Question 3-3", "Question 3-4", "Question 3-5"],
    ["Question 4-1", "Question 4-2", "Question 4-3", "Question 4-4", "Question 4-5"],
    ["Question 5-1", "Question 5-2", "Question 5-3", "Question 5-4", "Question 5-5"]
];

const jeopardyBoard = document.getElementById('jeopardy-board');

// Generate game board
categories.forEach((category, index) => {
    const categoryElement = document.createElement('div');
    categoryElement.classList.add('category');
    categoryElement.textContent = category;
    jeopardyBoard.appendChild(categoryElement);

    for (let i = 0; i < 5; i++) {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.textContent = `$${(i + 1) * 100}`;
        questionElement.dataset.category = index;
        questionElement.dataset.value = (i + 1) * 100;
        questionElement.addEventListener('click', showQuestion);
        jeopardyBoard.appendChild(questionElement);
    }
});

// Handle click event for questions
function showQuestion() {
    const categoryIndex = this.dataset.category;
    const questionValue = this.dataset.value;
    const question = questions[categoryIndex][questionValue / 100 - 1]; // Retrieve question
    alert(`Category: ${categories[categoryIndex]}\nValue: $${questionValue}\n\n${question}`);
}
