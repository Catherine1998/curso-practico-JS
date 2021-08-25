
function calcularModa(lista1){

    const lista1Count = {};

    lista1.map(
      //recorre el array
      function (elemento) {
        if (lista1Count[elemento]) {
          lista1Count[elemento] += 1;
        } else {
          lista1Count[elemento] = 1;
        }
      }
    );
    
    const lista1Array = Object.entries(lista1Count).sort(function (
      elementoA,
      elementoB
    ) {
      return elementoA[1] - elementoB[1];
    });
    
    const moda = lista1Array[lista1Array.length - 1];


    return "La moda es " + moda[0] + " el numero se repite " + moda[1] + " veces"; 
}
