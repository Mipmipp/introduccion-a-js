document.querySelector('#ingresar-información').onclick = function() {
    const primerNombre = document.querySelector('#primer-nombre').value;
    const segundoNombre = document.querySelector('#segundo-nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const edad = Number(document.querySelector('#edad').value);

    document.querySelector('#información-personal').value = `${primerNombre}, ${segundoNombre}, ${apellido}, ${edad} años.`;

    document.querySelector('#titulo').innerText = `Bienvenido ${primerNombre}!`;
    return false;
}
