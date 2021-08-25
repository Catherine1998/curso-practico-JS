function calcularMediaAritmetica(lista) {
  //     let sumaLista = 0;

  // for (let i = 0; i < lista.length; i++){
  // sumaLista = sumaLista + lista[i];
  // }

  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function calcularMediana(lista) {
  const listaOrdenada = lista.sort(function (a, b) {
    return a - b;
  });

  const mitadlista = parseInt(listaOrdenada.length / 2);

  let mediana;
  if (esPar(listaOrdenada.length)) {
    //true

    const elemento1 = listaOrdenada[mitadlista - 1];
    const elemento2 = listaOrdenada[mitadlista];

    const PromElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

     mediana = PromElemento1y2;
  } else {
 mediana = listaOrdenada[mitadlista];
  }
  return mediana;
}
