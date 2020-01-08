const container=document.querySelector('#container');
      style=document.querySelectorAll('.color');
      clear=document.querySelector('#clear');
      resize=document.querySelector('#resize');
      CONTAINER_SIZE=400;

function resizeCanvas(squares){
    const SQUARE_SIZE=CONTAINER_SIZE/squares;
    let div;
   // for (let i=1; i<=Math.pow(squares, 2); i++) {
    for (let i=1; i<=squares; i++) {
        let row=document.createElement('div');
        row.classList.add('row');
        row.setAttribute('style', `width: ${SQUARE_SIZE*squares}px; height: ${SQUARE_SIZE}px;`)
        for (let j=1; j<=squares; j++) {
            div=document.createElement('div');
            div.classList.add('block');
            div.setAttribute('style', `width: ${SQUARE_SIZE}px; height: ${SQUARE_SIZE}px; background-color:white;`);
            row.appendChild(div);
         }
        container.appendChild(row);
    }
}

window.addEventListener('load', () => {
    alert('loaded');
    resizeCanvas(16);
});
