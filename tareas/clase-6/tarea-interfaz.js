
function crearInterfaces(cantidadPersonas) {
    if (cantidadPersonas > 0) {
        mostrarElemento('#calcular');
    } else {
        resetear();
    }

    for (let i = 0; i < cantidadPersonas; i++) {
        crearInterfaz(i);
    }
};

function borrarInterfaces() {
    const $interfaces = document.querySelectorAll('.interfaz');
    for (let i = 0; i < $interfaces.length; i++) {
        $interfaces[i].remove();
    }
};

function crearInterfaz(indice) {
    const $div = document.createElement('div');
    $div.className = 'interfaz';

    const $label = document.createElement('label');
    $label.textContent = 'El salario del integrante # ' + (indice + 1) + ' es de:'
    const $input = document.createElement('input');
    $input.type = 'number';

    $div.appendChild($label);
    $div.appendChild($input);

    const $interfaces = document.querySelector('#interfaces');
    $interfaces.appendChild($div);
};

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
