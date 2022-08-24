const sumita = document.getElementById("sum");
const restita = document.getElementById("res");
const multi = document.getElementById("mul");
const divi = document.getElementById("divi");
const cal1 = document.getElementById("calculo1");
const cal2 = document.getElementById("calculo2");
const result = document.getElementById("result");
const btn = document.getElementById("btn-Calcular");

btn.addEventListener('click', Operaciones);

function Operaciones() {
    const valorDeC1 = parseFloat(cal1.value);
    const valorDeC2 = parseFloat(cal2.value);
    let resultado = 0;
    if (sumita.checked) {
        resultado = valorDeC1 + valorDeC2;
        result.innerHTML = "Resultado: " + resultado;
    }
    else if(restita.checked) {
        resultado = valorDeC1 - valorDeC2;
        result.innerHTML = "Resultado: " + resultado;
    }
    else if(multi.checked) {
        resultado = valorDeC1 * valorDeC2;
        result.innerHTML = "Resultado: " + resultado;
    }
    else if(divi.checked) {
        resultado = valorDeC1 / valorDeC2;
        result.innerHTML = "Resultado: " + resultado;
    }
}
