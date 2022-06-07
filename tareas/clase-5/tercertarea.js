const $calcularTiempoTotal = document.querySelector('#calcular-tiempo-total');

$calcularTiempoTotal.onclick = function() {
    const $horas = document.querySelectorAll('.horas');
    const $minutos = document.querySelectorAll('.minutos');
    const $segundos= document.querySelectorAll('.segundos');
    let horasTotal = 0;
    let minutosTotal = 0;
    let segundosTotal = 0;

    for(let i=0; i < $segundos.length; i++) {
        segundosTotal += Number($segundos[i].value);
    } if (segundosTotal > 60) {
        minutosTotal = Math.trunc(segundosTotal/60);
        segundosTotal = Math.trunc(segundosTotal%60);
    }

    for(let i=0; i < $minutos.length; i++) {
        minutosTotal += Number($minutos[i].value);
    } if(minutosTotal > 60){
        horasTotal = Math.trunc(minutosTotal/60);
        minutosTotal = Math.trunc(minutosTotal%60);
    }

    for(let i=0; i < $horas.length; i++) {
        horasTotal += Number($horas[i].value);
    }

    let $tiempoTotal = document.querySelector('#resultado');
    $tiempoTotal.innerText = `La tiempo total es de ${horasTotal} horas, ${minutosTotal} minutos y ${segundosTotal} segundos`;

    return false;
}
