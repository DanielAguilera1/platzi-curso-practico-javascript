// interaccion html y js (Cuadradiño)

function calcularCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetroCuadrado = value *4; 
    const areaCuadrado = value * value;
    alert(`el area del cuadrado es ${areaCuadrado}cm²
el perimetro de tu cuadrado es ${perimetroCuadrado}`);
}


// Codigo del Triangulo

function calcularTriangulo(){
    const inputTriA = document.getElementById("inputTriangulo1");
    const valueTriA = parseFloat(inputTriA.value); // Valor de Lado A (Triangulo)
    const inputTriB = document.getElementById("inputTriangulo2");
    const valueTriB = parseFloat(inputTriB.value);  // Valor de Lado B (Triangulo)
    const inputTriBase = document.getElementById("inputTrianguloBase");
    const valueTriBase = parseFloat(inputTriBase.value); // Valor de Base (Triangulo)
    const perimetroTriangulo = valueTriA+valueTriB+valueTriBase;

    if (valueTriA === valueTriB && valueTriB === valueTriBase && valueTriBase === valueTriA) {
        const areaTriangulo = (Math.sqrt(2) / 4)*valueTriA;
        const alturaTri = ((Math.sqrt(3) * valueTriB)/ 2)
        alert(`Tu triangulo es uno equilatero <3
el perimetro del triangulo es ${perimetroTriangulo}cm
el area del triangulo es ${areaTriangulo}cm²
la altura del triangulo es ${alturaTri}`);
    }

    else if (valueTriA === valueTriB) {
        const alturaTr = (valueTriA*valueTriA) - ((valueTriBase*valueTriBase)/4);
        const alturaTri = Math.sqrt(alturaTr);
        const areaTriangulo = (valueTriBase*alturaTri)/2;
        alert(`Tu triangulo es isosceles <3 
el perimetro del triangulo es ${perimetroTriangulo}cm
el area del triangulo es ${areaTriangulo}cm²
la altura del triangulo es ${alturaTri}`);
    }
}


// Codigo del circulo

function calcularPerimetroCirculo(){
    const inputRaCir = document.getElementById("inputCirculo");
    const valueRaCir = parseFloat(inputRaCir.value);
    const diametroCirculo = valueRaCir*2;
    const perimetroCirculo = diametroCirculo*Math.PI;
    alert(`el perimetro del circulo es ${perimetroCirculo}cm`);
}

function calcularAreaCirculo(){
    const inputRaCir = document.getElementById("inputCirculo");
    const valueRaCir = parseFloat(inputRaCir.value);
    const areaCirculo = (valueRaCir * valueRaCir)* Math.PI;
    alert(`el area del circulo es ${areaCirculo}cm`);
}

function calcularDiametroCirculo(){
    const inputRaCir = document.getElementById("inputCirculo");
    const valueRaCir = parseFloat(inputRaCir.value);
    const diametroCirculo = valueRaCir*2;
    alert(`el diametro del circulo es ${diametroCirculo}cm`);
}
