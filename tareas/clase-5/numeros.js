const listaNumeros = [];

for(let i = 0; i < (document.querySelectorAll('li').length); i++) {
    listaNumeros.push(Number(document.querySelectorAll('li')[i].innerText));
}
