// const precioOriginal = 120;
// const descuento = 18;


// console.log({ // se pueden enviar varias variables
// precioOriginal,
// descuento,
// porcentajePrecioConDescuento,
// precioConDescuento
// });

const cupones = ["Cupon1", "Cupon2", "Cupon3"];


function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;

    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const precioo = document.getElementById("preciooI");
    const preValue = precioo.value;
    const cup = document.getElementById("cupon");
    const cupValue = cup.value;

    let descuentoCup;

    switch (cupValue){
        case "Cupon1":
            descuentoCup = 15;
        break;
        case "Cupon2":
            descuentoCup = 30;
        break;
        case "Cupon3":
            descuentoCup = 25;
        break;
    }


    const preciofinal =  calcularPrecioConDescuento(preValue, descuentoCup);

    document.getElementById("resultado").innerHTML = "El precio con el descuento es " + preciofinal;
}