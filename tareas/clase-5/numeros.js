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
