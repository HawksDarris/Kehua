const categories = ["Colores",
		    "Cuentos",
		    "Prefieres",
		    "Preguntas"];
const questions = [
    // Each array is the column in the above categories
    [ // Column One
	"Verde",
	"Negro y blanco",
	"Rosa y Rojo",
	"Azul y Amarillo",
	"Naranja"
    ],
    [ // Column Two
	"¿Qué dice una vaca?",
	"¿Quién es el mosquito más importante del mundo?",
	"¿Qué quiere hacer el hermano del mosquito importante?",
	"¿Por qué el mosquito es importante?",
	"¿Por qué el hermano del rey no es importante?"
    ],
    [ // Column Three
	"¿Prefieres tener orejas 👂 de conejo 🐰 o orejas de elefante 🐘?",
	"¿Prefieres ser una vaca que puede hablar o una persona que no puede hablar?",
	"¿Prefieres tener dientes 🦷 amarillos o una nariz 👃 de payaso 🤡?",
	"¿Prefieres ser un superhéroe 🦸 que vuela 🪁 muy lento 🦥 o un superhéroe 🦸 que no puede caminar 🚶‍♂️?",
	"¿Prefieres tener una mano 🖐️ muy grande (very big) o un pie 🦶 muy pequeño?"
    ],

    [ // Column Four
	"¿Quieres comer 10 sándwiches 🥪 de pollo 🐔?",
	"¿Quieres pelear con el naranja 🟧?",
	"¿Te gustaría estar en la computadora 💻 con el naranja 🟧?",
	"¿Te gusta ver videos en la clase de español?",
	"¿Qué video te gustaría ahora?"
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
