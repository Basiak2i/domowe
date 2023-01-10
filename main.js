// const addElementBtn = document.querySelector("button");
// const display = document.querySelector("#display");
// const kolor = document.querySelector("#kolor");

// let iter = 0;

// const elementType = ['p', 'div', 'article'];

// function addElement() {
//     const Element = document.createElement('p');
//     Element.innerHTML = `Nowy element ${elementType[iter]}`;
//     Element.style.color = "#00f";
//     Element.addEventListener('click', function(){
//         //this.style.color = "#0ff"
//         this.remove();
//     });
//     display.appendChild(Element);
//     iter++;
//     if (iter > 2) {
//         iter = 0;
//     }
// }

// addElementBtn.addEventListener('click', addElement);

const addElementBtn = document.querySelector("button");
const display = document.querySelector("#display");
const podajelement = document.querySelector("#podajelement");
const kolor = document.querySelector("#kolor");


function addElement() {
    const Element = document.createElement(podajelement.value);
    Element.innerHTML = `${podajelement.value} <br>`;
    Element.style.color = kolor.value ;
    Element.addEventListener('click', function(){
        //this.style.color = "#0ff"
        this.remove();
    });
    display.appendChild(Element);
}

addElementBtn.addEventListener('click', addElement);


