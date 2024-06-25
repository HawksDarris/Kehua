const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
let rolling = false;

function rollNames() {
    if (rolling) return; // Prevent multiple clicks
    rolling = true;

    const nameSelector = document.getElementById('nameSelector');
    const nameElements = nameSelector.querySelectorAll('.name');
    const totalNames = names.length;

    // Add rolling class to trigger animation
    nameSelector.classList.add('rolling');

    // Reset after 3 seconds and pick a random name
    setTimeout(() => {
        nameSelector.classList.remove('rolling');

        const selectedIndex = Math.floor(Math.random() * totalNames);
        nameElements.forEach((element, index) => {
            element.style.transform = `translateY(${(index - selectedIndex) * 50}px)`;
            element.innerText = names[(selectedIndex + index) % totalNames];
        });

        rolling = false;
    }, 3000);
}

// Initialize names on page load
document.addEventListener('DOMContentLoaded', () => {
    const nameElements = document.querySelectorAll('.name');
    nameElements.forEach((element, index) => {
        element.style.transform = `translateY(${index * 50}px)`;
        element.innerText = names[index];
    });
});
