const container=document.querySelector('#container');
      styles=document.querySelectorAll('.color');
      clear=document.querySelector('#clear');
      resize=document.querySelector('#resize');
      CONTAINER_SIZE=400;
let mode="Black";
    blocks=null;
    squareSize=null;
    selected=styles[0]; //primer boton, negro.

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
    switch (selected.textContent) {
        case ("Black"): {
            e.target.setAttribute('style', `width: ${squareSize}px; height: ${squareSize}px; background: black;`);
            break;
        }
        case ("White"): {
            e.target.setAttribute('style', `width: ${squareSize}px; height: ${squareSize}px; background: white;`);
            break;
        }
        case("Random"): {
            let V1=Math.random()*255;
                V2=Math.random()*255;
                V3=Math.random()*255;
            e.target.setAttribute('style', `width: ${squareSize}px; height: ${squareSize}px; background: rgb(${V1}, ${V2}, ${V3});`);
            break;
        }
    }
}

styles.forEach(style => style.addEventListener('click', selection));

function selection(e) {
    if (selected!==null) {
        selected.classList.remove('selected');
    }
    selected=e.target;
    selected.classList.add('selected');
}

clear.addEventListener('click', () => {
    blocks.forEach(block => block.setAttribute('style', `width: ${squareSize}px; height: ${squareSize}px; background: white;`));
});




window.addEventListener('load', () => {
    resizeCanvas(16);
    selected.classList.add('selected');
});
