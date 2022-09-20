// Contador de cifras.
function contadorcifras() {
    var x = prompt("Introduzca un numero entero")
    alert(x.length)
}

// Secuencia de *

function seqasterisco() {
    var y = prompt("Introduce cuantas veces quieres ver el *")
    var output = "";

    for (let i = 0; i < y; i++) {
        output = output + "*";
    }
    alert(output)
}

//secuencia de simbolos
var secuencia = ""
function seqsimbolos() {
    for (let i = 1; i < 5; i++) {
        secuencia = secuencia + "*";
        secuencia = secuencia + "+";
        secuencia = secuencia + "_";
    }
    alert(secuencia);
}

//Triangulo de *
function triangulo() {
    var y = ""
    for (let i = 1; i < 6; i++) {
        for (let k = 0; k < i; k++) {
            y = y + "*";
        }
        y = y + "\n";
    }
    alert(y);
}

// Comparador de fechas

const diasenmes=[0,31,28,31,30,31,30,31,31,30,31,30,31];
var dia1 = prompt("introduce un dia");
var mes1 = prompt("introduce un mes");
var dia2 = prompt("introduce otro dia");
var mes2 = prompt("introduce otro mes");

function suma1(){
    
}