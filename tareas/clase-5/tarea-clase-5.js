document.querySelector('#calcular').onclick = function() {
  const salarioAnual = Number(document.querySelector('#salario-anual').value);
  const salarioMensual = calcularSalarioMensual(salarioAnual);

  document.querySelector('#salario-mensual').value = salarioMensual;

  return false;
}

function calcularSalarioMensual(salarioAnual) {
  const CANTIDAD_MESES_DEL_ANIO = 12;
  return salarioAnual / CANTIDAD_MESES_DEL_ANIO;
}
