const container=document.querySelector('#container');
      styles=document.querySelectorAll('.color');
      clear=document.querySelector('#clear');
      resize=document.querySelector('#resize');
      CONTAINER_SIZE=400;
let blocks=null;
    squareSize=null;
    selected=styles[0]; //primer boton (negro) como activo al cargar la pagina.

function resizeCanvas(squares){ //creacion de la plantilla de bloques.
    let div;
    squareSize=CONTAINER_SIZE/squares;
    for (let i=1; i<=squares; i++) {
        let row=document.createElement('div');
        row.classList.add('row');
        row.setAttribute('style', `width: ${squareSize*squares}px; height: ${squareSize}px;`)
        for (let j=1; j<=squares; j++) {
            div=document.createElement('div');
            div.classList.add('block');
            div.setAttribute('style', `width: ${squareSize}px; height: ${squareSize}px; background-color:rgb(255,255,255);`);
            row.appendChild(div);
         }
        container.appendChild(row);
    }
    blocks=document.querySelectorAll('.block');
    blocks.forEach(block => block.addEventListener('mouseover', color));
}

function color(e) { //function que se ejecuta al pasar sobre un bloque.
    console.log(e.target);
    switch (selected.textContent) {
        case ("Black"): {
            e.target.style.backgroundColor=`rgb(0,0,0)`;
            break;
        }
        case ("White"): {
            e.target.style.backgroundColor=`rgb(255,255,255)`;
            break;
        }
        case("Random"): {
            let V1=Math.random()*255;
                V2=Math.random()*255;
                V3=Math.random()*255;
                e.target.style.backgroundColor=`rgb(${V1},${V2},${V3})`;
            break;
        }
        case("Grayscale"): {
            if (e.target.style.backgroundColor=="rgb(0,0,0)")
                return;
            else {
                const VALUE_CHANGE=25.5; //10% de 255.
                let presentValue="", rgb="rgb(", i=4; //donde empieza el primer valor.
                while (i<(e.target.style.backgroundColor).length) { //parseo del string rgb() para obtener los numeros.
                    if (e.target.style.backgroundColor[i]==',' || e.target.style.backgroundColor[i]==')') {
                        presentValue=Number(presentValue)-VALUE_CHANGE;
                        if (presentValue<0)
                            presentValue=0;
                        rgb+=presentValue+e.target.style.backgroundColor[i];
                        presentValue="";    
                        }
                    else 
                        presentValue+=e.target.style.backgroundColor[i];
                    i++;
                    }
                    e.target.style.backgroundColor=rgb;
                 }
            }
    }
}

styles.forEach(style => style.addEventListener('click', selection)); //botones de estilo.

function selection(e) { //cambia clase a seleccionado para aquel que este activo.
    if (selected!==null) {
        selected.classList.remove('selected');
    }
    selected=e.target;
    selected.classList.add('selected');
}

clear.addEventListener('click', () => {
    blocks.forEach(block => block.setAttribute('style', `width: ${squareSize}px; height: ${squareSize}px; background:rgb(255,255,255);`));
});




window.addEventListener('load', () => { //al cargar la pagina establece un boton como seleccionado y una plantilla de 16x16.
    resizeCanvas(16);
    selected.classList.add('selected');
});
