document.addEventListener("DOMContentLoaded", function() {
  const colors = ['skyblue', 'magenta', 'lightgreen', 'orange', 'pink'];
  const buttonTexts = [
    'Teacher Darris has lots of siblings',
    'I want the school to not have homework',
    'Head Teacher Magic Robot Kobe Bryant says no homework!',
    'In the future, I will live under the sea',
    'There won\'t be school bags because everything will be online',
    'There will be students from other countries!',
    'I will have a farm and grow lots of plants',
    '15 years ago, I was not alive',
    '100 years ago, the school did not have robots',
    'In the past, I could fly (but I forgot how)',
    'With Magic Robot Kobe Bryant\'s help, I can fly to the mountains',
    'I like everything. I like water, I like animals, I even like rules',
    'I am sad because, in the future, we will not have homework',
    'Leonardo da Vinci painted The Mona Lisa on wood',
    'I wish Teacher Darris...',
    'Luban cut his finger! So sad. :(',
    'You\'re going to be an artist',
    'Why do we draw eggs all the time?',
    'I am going to grow a plant on my desk',
    'I hate washing clothes by hand',
    'Life was hard in the past',
    'Life is easier now',
    'Life will be easier in the future',
  //   'to do',
  //   'to make',
  //   'to put',
  //   'to be able to',
  //   'to give',
  //   'to say',
  //   'to know',
    'You\'re poor. I can give you gold.'];
  const buttonGrid = document.getElementById('buttonGrid');

  for (let i = 0; i < buttonTexts.length; i++) {
    const button = document.createElement('button');
    button.className = 'button'; // Assign button class
    button.textContent = buttonTexts[i % buttonTexts.length]; // Loop through buttonTexts array
    button.classList.add(colors[i % colors.length]); // Assign color class
    buttonGrid.appendChild(button);
  }

  const buttons = document.querySelectorAll('.button');
  const originalText = [];

  buttons.forEach(button => {
    originalText.push(button.innerText); // Store original text
    button.addEventListener('click', () => {
      if (!button.classList.contains('reset')) {
        button.innerText = '';
        button.classList.add('darken', 'transparent');
      } else {
        buttons.forEach((btn, index) => {
          btn.innerText = originalText[index]; // Restore original text
          btn.classList.remove('darken', 'transparent');
        });
      }
    });
  });
});
  
