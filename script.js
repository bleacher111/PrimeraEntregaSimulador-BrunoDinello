window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('gastosForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const campos = ['alquiler', 'comida', 'servicios', 'transporte'];
      let camposVacios = [];
      
      //Recorro los campos y si alguno está vacío lo agrego al array camposVacios
      campos.forEach(campo => {
          const input = document.getElementById(campo);
          if (!input.value) {
              camposVacios.push(campo);
          }
      });
      
      //Si el array camposVacios tiene elementos, muestro un alert con los campos que faltan completar y sino, calculo el total de gastos y determino el mensaje a mostrar
      if (camposVacios.length > 0) {
          alert('Por favor completa los campos: ' + camposVacios.join(', '));
      } else {
          const total = calcularTotalGastos(campos);
          const resultado = determinarMensaje(total);
          document.getElementById('resultado').textContent = 'Total de gastos: ' + total + '. ' + resultado;
      }
  });
});

//Función que cálcula el total de gastos
function calcularTotalGastos(campos) {
  let total = 0;
  campos.forEach(campo => {
      const input = document.getElementById(campo);
      total += Number(input.value);
  });
  return total;
}

//Función que determina el mensaje a mostrar
function determinarMensaje(total) {
  if (total > 5000) {
      return 'Tus gastos están por encima del promedio.';
  } else {
      return 'Tus gastos están por debajo del promedio.';
  }
}
