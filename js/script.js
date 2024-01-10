const button = document.querySelector('button');
const grid = document.querySelector('.grid')

const rows = 10;
const cols = 10;
const totalCells = rows * cols;


const createCells = number => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.append(number);

    return cell;
}

button.addEventListener('click', () =>{
    console.log('cliccato');

    for(let i = 1; i <= totalCells; i++){

        const cell = createCells(i);

        cell.addEventListener('click', () => {
            cell.classList.toggle('clicked');
            console.log(event.target)
        })
        
        grid.appendChild(cell);
    }
})