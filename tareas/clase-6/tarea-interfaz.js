function resetear() {
    borrarInterfaces();
    ocultarElemento('#calculos');
    ocultarElemento('#calcular');
}

function mostrarElemento(elemento) {
    document.querySelector(elemento).className = '';
}

function ocultarElemento(elemento) {
    document.querySelector(elemento).className = 'oculto';
}
