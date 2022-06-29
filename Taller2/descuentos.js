const cupones = [
    "tilin",
    "omgtilin",
    "elflash",
]

function CalcularWithButton(){
    const inputPrice = document.getElementById("inputPrice");
    const inputDesc = document.getElementById("inputDesc");
    const priceValue = parseFloat(inputPrice.value);
    const priceDesc = parseFloat(inputDesc.value);
    const inputCupon = document.getElementById("inputCupon");
    let cuponValue = inputCupon.value;
    let resultCupon = document.getElementById("textCupon")

    //verificar cupon y darle su respectivo descuento
    if (cupones[0] === cuponValue) {
        cuponValue = 10;
        resultCupon.innerText = (`omg tienes un cupotilin ${cuponValue}%`);
    }
    else if (cupones[1] === cuponValue) {
        cuponValue = 20;
        resultCupon.innerText = (`omg tienes un omgcupotilin del ${cuponValue}%`);
    }
    else if (cupones[2] === cuponValue) {
        cuponValue = 30;
        resultCupon.innerText = (`esta monda si funciono ${cuponValue}%`);
    }
    else {
        cuponValue = 0;
        resultCupon.innerText = ("");
    }
 
    if ( cuponValue >= 1 ) {
        const descunetoFinal = cuponValue+priceDesc;
        const precioConDescuento = priceValue-((priceValue * descunetoFinal)/100);
        const resultP = document.getElementById("priceP");
        resultP.innerText = `tu producto con ${descunetoFinal}% es de ${precioConDescuento}`;
    }
    else{
        const precioConDescuento = priceValue-((priceValue * priceDesc)/100);
        const resultP = document.getElementById("priceP");
        resultP.innerText = `tu producto con ${priceDesc}% es de ${precioConDescuento}`;
    }
}