const listaNumeros = [];

for(let i = 0; i < (document.querySelectorAll('li').length); i++) {
    listaNumeros.push(Number(document.querySelectorAll('li')[i].innerText));
}
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
