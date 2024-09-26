// Recuperamos elementos: "input"
const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const azul = document.getElementById("azul");

console.log(rojo.value);
console.log(verde.value);
console.log(azul.value);

// Recuperamos elementos: "p"
const textoRojo = document.querySelector("#textoRojo");
const textoVerde = document.querySelector("#textoVerde");
const textoAzul = document.querySelector("#textoAzul");

// Agregar el contenido en los elementos: "p"
textoRojo.textContent = rojo.value;
textoVerde.textContent = verde.value;
textoAzul.textContent = azul.value;

let colorRojo = rojo.value;
let colorVerde = verde.value;
let colorAzul = azul.value;

const actualizarColor = (rojo, verde, azul) => {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRGB;
};

rojo.addEventListener("change", (event) => {
  colorRojo = event.target.value;
  console.log(event.target.value);
  textoRojo.textContent = colorRojo;
  actualizarColor(colorRojo, colorVerde, colorAzul);
});
verde.addEventListener("change", (event) => {
  colorVerde = event.target.value;
  console.log(event.target.value);
  textoVerde.textContent = colorVerde;
  actualizarColor(colorRojo, colorVerde, colorAzul);
});
azul.addEventListener("change", (event) => {
  colorAzul = event.target.value;
  console.log(event.target.value);
  textoAzul.textContent = colorAzul;
  actualizarColor(colorRojo, colorVerde, colorAzul);
});
