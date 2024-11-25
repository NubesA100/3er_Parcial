// script.js
function cambiarColor() {
    const colores = ['#f4f4f9', '#f0e68c', '#add8e6', '#98fb98'];
    const fondo = document.body.style.backgroundColor;
    let nuevoColor = colores[Math.floor(Math.random() * colores.length)];
  
    // Asegurarse de que el nuevo color sea diferente del actual
    while (nuevoColor === fondo) {
      nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    }
  
    document.body.style.backgroundColor = nuevoColor;
  }
  