// Contador de cifras.
function contadorcifras() {
    let x = parseInt(prompt("Introduzca un numero entero"));
    var cont = 0;
    /*do{
        x = Math.floor(x / 10);
        cont++;
    }while(x != 0)*/
    while (x != 0) {
        x = Math.floor(x / 10);
        cont++;
    }
    if (cont == 0) {
        cont++;
    }
    alert("El numero de cifras es " + cont);
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

function comparador() {
    const diasenmes = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var dia1 = parseInt(prompt("introduce un dia"));
    var mes1 = parseInt(prompt("introduce un mes en numero, por ejemplo Enero=1, Febrero=2,..."));
    var dia2 = parseInt(prompt("introduce otro dia"));
    var mes2 = parseInt(prompt("introduce otro mes en numero, por ejemplo Enero=1, Febrero=2,..."));
    var totaldias1 = 0;
    var totaldias2 = 0;
    if (mes1 > 12) {
        alert("los años no tienen " + mes1 + " meses.");
    }
    if (mes2 > 12) {
        alert("los años no tienen " + mes2 + " meses.");
    }
    if (dia1 > diasenmes[mes1]) {
        alert("El mes " + mes1 + " no tiene " + dia1 + " dias.");
    }
    if (dia2 > diasenmes[mes2]) {
        alert("El mes " + mes2 + " no tiene " + dia2 + " dias.");
    }
    for (let i = 0; i <= mes1; i++) {
        totaldias1 += diasenmes[i];
    }
    for (let i = 0; i <= mes2; i++) {
        totaldias2 += diasenmes[i]; 2
    }
    totaldias1 += dia1;
    totaldias2 += dia2;
    diferencia = totaldias1 - totaldias2;
    if (diferencia < 0) {
        diferencia = diferencia * -1;
    }
    alert("La diferencia de dias entre fechas es de " + diferencia + " dias");
}