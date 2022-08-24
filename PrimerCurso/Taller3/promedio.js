

function CalcularPromedio(){
//Variables para recojer datos de la web<3
const inputPromedio = document.getElementById("valoresPromedio");
const resultPromedio = document.getElementById("promedioValueHTML");
const resultMediana= document.getElementById("medianaValueHTML");
const resultModa = document.getElementById("modaValueHTML");
//separador por comas, para recibir como array de strings .split(`,`)
let valueSplit = inputPromedio.value.split(',').map(parseFloat);
// Llamando funcion de media y moda
CalcularPromedioAritmetica(valueSplit);
CalcularMediaAritmetica(valueSplit);
CalcularModaAritmetica(valueSplit);
//Calcular Promedio aritmetico
function CalcularPromedioAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    resultPromedio.innerText = `= ${promedioLista}`;
}


//Calcular Mediana aritmetica
function CalcularMediaAritmetica(listaPro) {
// Con este .sort logramos ordenar los numeros <3    
    listaPro.sort(function(a, b){return a - b;});

// Aqui logramos mirar si la longitud del array es par o no
function esPar(numerinchi){
    if (numerinchi % 2 === 0){
        return true;
    } 
    else {
        return false;
    }}

let mediana;
const mitadListaMe = parseInt(listaPro.length / 2);

if (esPar(listaPro.length)){
    const elemento1 = listaPro[mitadListaMe - 1];
    const elemento2 = listaPro[mitadListaMe];
    mediana = CalcularPromedioAritmetica([elemento1, elemento2]);
} else{
    mediana = listaPro[mitadListaMe];
    resultMediana.innerText = `= ${mediana}`;
}}
    
    
    
    
    
function CalcularModaAritmetica(listaXD) {
    const counstListXD = {};
    listaXD.map(
        function (element) {
            if (counstListXD[element]) {
                counstListXD[element] += 1;
            } else {
                counstListXD[element] = 1;
            }});

    const listArray1 = Object.entries(counstListXD).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        });

    const moda = listArray1[listArray1.length - 1];
    resultModa.innerText = `= ${moda[0]}`;
}
}   






