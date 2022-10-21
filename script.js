const table = document.querySelector('.board');
table.style.gridTemplateColumns = 'repeat(16, 1fr)';
table.style.gridTemplateRows = 'repeat(16, 1fr)';




//loops through creating div's
for(let i = 0; i < 256; i++){
    const square = document.createElement('div');
    square.classList.add('box');
    square.style.backgroundColor = 'green';
    square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'black';
})
//once button is press button will class with the background of black will turn green
let erase = document.getElementById('eraser')
erase.addEventListener('click', () => {
    if(square.style.backgroundColor = 'green'){

    };
})

table.appendChild(square);
}

//on click of a button prompt a question to Change the size of the squares
function sizeChange () {
    let question = prompt('type a grid size');
    if(question > 100){
        alert('Error number is to high')
    }else {
    table.style.gridTemplateColumns = `repeat(${question}, 1fr)`;
    table.style.gridTemplateRows = `repeat(${question}, 1fr)`;
    }
}

 
 
