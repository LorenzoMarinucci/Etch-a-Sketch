const container=document.querySelector('#container');
      style=document.querySelectorAll('.color');
      clear=document.querySelector('#clear');
      resize=document.querySelector('#resize');
      CONTAINER_SIZE=400;
let mode="black";
    blocks=null;
    squareSize=null;

function resizeCanvas(squares){
    let div;
    squareSize=CONTAINER_SIZE/squares;
    for (let i=1; i<=squares; i++) {
        let row=document.createElement('div');
        row.classList.add('row');
        row.setAttribute('style', `width: ${squareSize*squares}px; height: ${squareSize}px;`)
        for (let j=1; j<=squares; j++) {
            div=document.createElement('div');
            div.classList.add('block');
            div.setAttribute('style', `width: ${squareSize}px; height: ${squareSize}px; background-color:white;`);
            row.appendChild(div);
         }
        container.appendChild(row);
    }
    blocks=document.querySelectorAll('.block');
    blocks.forEach(block => block.addEventListener('mouseover', color));
}

function color(e) {
    console.log(e.target);
    switch (mode) {
        case ("black"): {
            e.target.setAttribute('style', `width: ${squareSize}px; height: ${squareSize}px; background: black;`);
            break;
        }
    }
}


window.addEventListener('load', () => {
    alert('loaded');
    resizeCanvas(16);
});
