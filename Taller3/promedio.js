// Con este .sort logramos ordenar los numeros <3
function CalcularMediaAritmetico(listaPro) {
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
        mediana = CalcularMediaAritmetica([elemento1, elemento2]);
    } else{
        mediana = listaPro[mitadListaMe];
        console.log(mediana);
    }}







    const listaXD = [1,1,2,2,3,3,3,3,2,1,5,6,8,9,10,];

    const counstListXD = {};

    listaXD.map(
        function (element){
            if(counstListXD[element]){
                counstListXD[element] += 1;
            } else{
                counstListXD[element] = 1;
            }
        }
    );

    const listArray1 = Object.entries(counstListXD).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );

    const moda = listArray1[listArray1.length - 1];


function CalcularPromedio(){
//Variables para recojer datos de la web<3
let listaPromedio = [];
const inputPromedio = document.getElementById("valoresPromedio");
let nuevaLongitud = listaPromedio.push(inputPromedio.value);
console.log(`${listaPromedio}`);

//Calcular Promedio aritmetico
    const sumaLista = listaPromedio.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
    }
);

const promedioLista = sumaLista / listaPromedio.length;
// alert(`${promedioLista}`)
}   