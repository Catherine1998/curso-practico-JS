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
    return parseInt(ladoTriangulo1) + parseInt(ladoTriangulo2) + parseInt(baseTriangulo); 
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

//triangulo isoceles

console.group("Triangulo Isoceles"); 

function trianguloIsosceles(ladoTriangulo1, ladoTriangulo2, baseTriangulo){
    if (ladoTriangulo1 != ladoTriangulo2){
       return mostrar("Los lados no corresponden a un triangulo isoceles"); 
    }
    
    if (ladoTriangulo1 == baseTriangulo) {
    
        return mostrar("la base y lado no pueden ser iguales en un triangulo isoceles"); 

    }
     else {
        altura = Math.sqrt(Math.pow(ladoTriangulo1,2) - (Math.pow(baseTriangulo,2)/4));
        return altura;
    }
}


console.groupEnd();

//Aqui interactuamos con el html 

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado"); //obtener el input 
    const value = input.value; // se llama el valor que escribieron los usuarios en el input

    const perimetro = "El perimetro del cuadrado es <strong>" + perimetroCuadrado(value) + "</strong>"; 

    mostrar(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado"); //obtener el input 
    const value = input.value; // se llama el valor que escribieron los usuarios en el input


    const area = "El area del cuadrado es <strong>" + areaCuadrado(value) + "</strong>"; 

    mostrar(area);
}


function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("InputTriangulolado1"); //obtener el input 
    const lado1Value = lado1.value; // se llama el valor que escribieron los usuarios en el input

    const lado2 = document.getElementById("InputTriangulolado2"); //obtener el input 
    const lado2Value = lado2.value; // se llama el valor que escribieron los usuarios en el input
    
    const base = document.getElementById("InputTriangulobase"); //obtener el input 
    const baseValue = base.value; // se llama el valor que escribieron los usuarios en el input

    const perimetroT = "El perimetro del triángulo es <strong>" + perimetroTriangulo(lado1Value,lado2Value,baseValue) + "</strong>"; 

    mostrar(perimetroT);
}


function calcularAlturaTrianguloIso(){
    const lado1iso = document.getElementById("InputTrianguloisolado1"); //obtener el input 
    const lado1isoValue = lado1iso.value; // se llama el valor que escribieron los usuarios en el input

    const lado2iso = document.getElementById("InputTrianguloisolado2"); //obtener el input 
    const lado2isoValue = lado2iso.value; // se llama el valor que escribieron los usuarios en el input
    
    const baseiso = document.getElementById("InputTrianguloisobase"); //obtener el input 
    const baseisoValue = baseiso.value; // se llama el valor que escribieron los usuarios en el input

    const altura = "La altura del triángulo es <strong>" + trianguloIsosceles(lado1isoValue,lado2isoValue,baseisoValue) + "</strong>"; 

    mostrar(altura);
}



function calcularAreaTriangulo(){
    
    const base = document.getElementById("InputTriangulobase"); //obtener el input 
    const baseValue = base.value; // se llama el valor que escribieron los usuarios en el input

    const altura = document.getElementById("InputTrianguloaltura"); //obtener el input 
    const alturaValue = altura.value; // se llama el valor que escribieron los usuarios en el input

    const areaT = "El área del triángulo es <strong>" + areaTriangulo(baseValue,alturaValue) + "</strong>"; 

    mostrar(areaT);
}

function calcularDiametroCirculo(){
    
    const radio = document.getElementById("InputRadio"); //obtener el input 
    const radioValue = radio.value; // se llama el valor que escribieron los usuarios en el input

    const diametroC = "El diametro del circulo es <strong>" + diametroCirculo(radioValue) + "</strong>"; 

    mostrar(diametroC);
}

function calcularPerimetroCirculo(){
    
    const radio = document.getElementById("InputRadio"); //obtener el input 
    const radioValue = radio.value; // se llama el valor que escribieron los usuarios en el input

    const perimetroC = "El perimetro del circulo es <strong>" + perimetroCirculo(radioValue) + "</strong>"; 

    mostrar(perimetroC);
}

function calcularAreaCirculo(){
    
    const radio = document.getElementById("InputRadio"); //obtener el input 
    const radioValue = radio.value; // se llama el valor que escribieron los usuarios en el input

    const areaC = "El area del circulo es <strong>" + areaCirculo(radioValue) + "</strong>"; 

    mostrar(areaC);
}

function mostrar(value){
return document.getElementById("resultado").innerHTML = value;
}