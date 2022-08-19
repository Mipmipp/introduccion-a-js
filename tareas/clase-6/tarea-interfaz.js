function obtenerSalarios() {
    const $salarios = document.querySelectorAll('.interfaz input');
    const salarios  = [];

    for(let i = 0; i < $salarios.length; i++) {
        salarios.push(Number($salarios[i].value));
    }
    return salarios;
}

function mostrarSalarios(tipo, valor) {
    document.querySelector(`#${tipo}-salario`).textContent = valor;
}

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
