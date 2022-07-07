// Helpers & Utils
function esPar(numerinchi) {
    return (numerinchi % 2 === 0);
}



const salariosCol = colombia.map(
    function (personita){
        return personita.salario;
    }
);

const salariosColSort = salariosCol.sort(
    function (a, b){
        return a - b;
    }
);


function CalcularPromedioAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        const promediolistiñi = CalcularPromedioAritmetica([personaMitad1, personaMitad2]);
        return promediolistiñi;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad
    }
}

const medianaGeneralCol = medianaSalarios(salariosColSort);


// Mediana del TOP 10%

const sliceStart = (salariosColSort.length * 90) / 100;
const slice1 = salariosColSort.length - sliceStart;
const slice2 = salariosColSort.length - slice1; 
const salariosColTop10 = salariosColSort.slice(slice2, salariosColSort.length);
const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
    salariosColSort,
    medianaGeneralCol,
    salariosColTop10,
    medianaTop10Col,
});