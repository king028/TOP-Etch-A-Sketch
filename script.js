
const board = document.querySelector('.grid');
board.style.gridTemplateColumns = 'repeat(16, 1fr)';
board.style.gridTemplateRows = 'repeat(16, 1fr)';

for(let i = 0; i < 256; i++){
    const box = document.createElement('div');
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black';
    })
    box.style.backgroundColor = 'green';
    board.insertAdjacentElement('beforeend', box);
}

 
function promptQuestion() {
    let question = prompt('How many square per side?')
    alert(question);
}










