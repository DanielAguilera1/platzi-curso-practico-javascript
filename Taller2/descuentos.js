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

    //verificar cupon y darle su respectivo descuento
    if (cupones[0] === cuponValue) {
        cuponValue = 10;
        alert(`omg tienes un cupotilin ${cuponValue}%`);
    }
    if (cupones[1] === cuponValue) {
        cuponValue = 20;
        alert(`omg tienes un omgcupotilin ${cuponValue}%`);
    }
    if (cupones[2] === cuponValue) {
        cuponValue = 30;
        alert(`esta monda si funciono ${cuponValue}%`);
    }
    else {
        alert("no valido esa monda")
        cuponValue = 0;
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