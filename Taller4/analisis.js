 // funciones Helpers

function EsPar(numero){
  return (numero % 2 === 0 );
}

function calcularMediaAritmetica(lista) {
 
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

// calculadora de mediana

function medianaSalarios(lista){
  const mitad = parseInt(lista.length / 2);

  if(EsPar(lista.length)){
      const personaMitad1 = lista[mitad - 1];
      const personaMitad2 = lista[mitad];
const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
return mediana; 

  } else {
      const personaMitad = lista[mitad];
      return personaMitad;
  }
}
//Mediana General

const salariosCol = colombia.map(function(personita){
  return personita.salary;
});

const salarioColOrdenado = salariosCol.sort(function(salaryA, salaryB){
  return salaryA - salaryB; 
});


const medianaGeneralCol =   medianaSalarios(salarioColOrdenado);

//Mediana del top 10%



const spliceStart = (salarioColOrdenado.length * 90 ) / 100; 
const spliceCount = salarioColOrdenado.length - spliceStart; 

const salariosColTop10 = salarioColOrdenado.splice(spliceStart, spliceCount);

const medianaTop10Col =   medianaSalarios(salariosColTop10);


// calculo de diferencia salarial del primero con el ultimo 

function CalculoDif(lista){
const salarioMenor = lista[0];
const salarioMayor = lista[lista.length-1]; 

const dif = salarioMayor - salarioMenor; 

return dif; 
}

// suma de bonificación 





console.log(
  medianaGeneralCol, 
  medianaTop10Col,
  CalculoDif(salarioColOrdenado)
  );