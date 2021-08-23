// código del cuadrado

console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado; 
}

// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

//código triangulo

console.group("Triangulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//   "Los lados del triangulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm, " +
//     baseTriangulo +
//     "cm"
// );


// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + " cm");

function perimetroTriangulo (ladoTriangulo1, ladoTriangulo2, baseTriangulo){
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo; 
}

function areaTriangulo (baseTriangulo, alturaTriangulo){
    return  (baseTriangulo * alturaTriangulo) / 2; 
}

console.groupEnd();


//código círculo

console.group("Círculo");

//radio 

// const radioCirculo = 4;
// console.log("El radio del círculo es de: " + radioCirculo + " cm");


//diametro 

function diametroCirculo(radio){
    return radio * 2; 
}

//PI

const pi = Math.PI; 
console.log("PI es : " + pi );

//circunferencia 

function perimetroCirculo(radio){
const diametro = diametroCirculo(radio); 
return diametro * pi;
}

//area

function areaCirculo(radio){
    return (radio * radio) * pi; 
}


console.groupEnd();
