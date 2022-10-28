const table = document.querySelector('.board');
table.style.gridTemplateColumns = 'repeat(16, 1fr)';
table.style.gridTemplateRows = 'repeat(16, 1fr)';

let colorChange = 'black';

//loops through creating div's
for(let i = 0; i < 10000; i++){
    const square = document.createElement('div');
    square.classList.add('box');
    square.style.backgroundColor = 'white';
   square.addEventListener('mouseover', backColor);
    
//once button is press button will delete with the background of black will turn green
let del = document.getElementById('delete')
del.addEventListener('click', () => {
    if(square.style.backgroundColor = 'white'){};
})
table.appendChild(square);
}


//on click of a button prompt a question to Change the size of the squares
function sizeChange() {
    let question = prompt('type a grid size');
    if(question > 100){
        alert('Error number is to high')
    }else {
    table.style.gridTemplateColumns = `repeat(${question}, 1fr)`;
    table.style.gridTemplateRows = `repeat(${question}, 1fr)`;
    }
}

function backColor() {
    this.style.backgroundColor = colorChange;
}

function changeColor(btn) {
    colorChange = btn;
}