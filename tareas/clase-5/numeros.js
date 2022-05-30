const listaNumeros = [];

function convertirArray() {
    for(let i = 0; i < (document.querySelectorAll('li').length); i++) {
        listaNumeros.push(Number(document.querySelectorAll('li')[i].innerText));
    }
}

convertirArray();

function calcularPromedio() {
    let sumaNumeros = 0;
    
    for(let i = 0; i < (listaNumeros.length); i++) {
        sumaNumeros += listaNumeros[i];
    }
    return sumaNumeros / listaNumeros.length;
}

function encontrarNumeroMenor() {
    let numeroMenor = listaNumeros[0];
    for(i = 0; i < (listaNumeros.length); i++) {
        if (listaNumeros[i] < numeroMenor) {
            numeroMenor = listaNumeros[i];
        }
    }
    return numeroMenor
}

function encontrarNumeroMayor() {
    let numeroMayor = listaNumeros[0];
    for(i = 0; i < (listaNumeros.length); i++) {
        if (listaNumeros[i] > numeroMayor) {
            numeroMayor = listaNumeros[i];
        }
    }
    return numeroMayor;
}

    function encontrarNumeroRepetido() {
    let numeroRepetido = 0;
    for(let i = 0; i < (listaNumeros.length); i++) {
        for(let j = i + 1; j < listaNumeros.length; j++) {
            if(listaNumeros[i] === listaNumeros[j]) {
                numeroRepetido = listaNumeros[i]
            }
        }
    }
    return numeroRepetido;
}

document.querySelector('#promedio').innerText = `El promedio es ${calcularPromedio()}`;
document.querySelector('#numero-menor').innerText = `El número más pequeño es ${encontrarNumeroMenor()}`;
document.querySelector('#numero-mayor').innerText = `El número más grande es ${encontrarNumeroMayor()}`;
document.querySelector('#numero-repetido').innerText = `El número más frecuente es ${encontrarNumeroRepetido()}`;
