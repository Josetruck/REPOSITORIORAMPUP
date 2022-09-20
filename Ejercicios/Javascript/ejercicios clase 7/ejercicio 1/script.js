// Ejercicio 1
function ejercicio1() {
    var n1 = prompt("Inserte un primer número");
    var n2 = prompt("Inserte un segundo número");
    var n3 = prompt("Inserte un tercer número");

    n1 = parseInt(n1);
    n2 = parseInt(n2);
    n3 = parseInt(n3);


    if (n1 < n2 && n1 < n3) {
        alert(n1);
    } else {
        if (n2 < n3 && n2 < n1) {
            alert(n2)
        } else {
            if (n3 < n2 && n3 < n1) {
                alert(n3)
            }
        }
    }
}

// Ejercicio 2
function ejercicio2() {
    var frase = prompt("Inserta una frase.");
    var letra = prompt("Inserta la letra que quieres buscar.");
    var cantidad = 0;


    for (let i = 0; i < frase.length; i++) {
        if (frase[i] == letra) {
            cantidad = cantidad + 1;
        }
    }
    alert(cantidad); ç
}

// Ejercicio 3 

const ejercicio3 = (calc) => {
    var n1 = prompt("Introduzca el primer número");
    var operacion = prompt("Introduzca el símbolo + si desea sumar o el símbolo - si desea restar");
    var n2 = prompt("Introduzca el segundo número");
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    switch (operacion) {
        case "+":
            alert(n1 + n2);
            break;
        case "-":
            alert(n1 - n2);
            break;
        default:
            alert("Error:La operación no es posible")
    }
}

// Ejercicio 4

( function () {
    var user = prompt("Introduce tu nombre de usuario");
    var pass = prompt("Introduce una contraseña");
    var intento = 0;
    do {
        var userx = prompt("Introduce tu nombre de usuario");
        var passx = prompt("Introduce una contraseña");
        intento = intento + 1;
        if (user === userx && pass === passx) {
            alert("Validación completada")
            intento = intento + 3;
        } else {
            alert("Validación fallida.")
        }
    } while (intento < 3);
}) ();

// Ejercicio 5

const ejercicio5 = (abc) => {
    var a = prompt("letra");

    switch (a) {
        case "a": alert(7);
            break;
        case "b": alert(9);
            break;
        case "c": alert(101);
            break;
        default: alert("te has equivocado de letra");
    }
}

// Ejercicio 6

function ejercicio6() {
    var palabra = [prompt("introduce la primera palabra"), prompt("introduce la segunda palabra"), prompt("introduce la tercera palabra"), prompt("introduce la cuarta palabra"), prompt("introduce la quinta palabra"), prompt("introduce la sexta palabra"), prompt("introduce la séptima palabra")]
    var mem;
    var k;
    console.log(palabra)
    for (k = 1; k < 7; k++) { // este bloque se repite 7 veces para que finalmente la cifra mayor quede a la derecha del todo.
        for (let i = 0; i < 7; i++) {// este bloque se repite 7 veces para desplazar la cifra mayor un paso a la derecha.
            if (palabra[i] > palabra[i + 1]) {
                mem = palabra[i];
                palabra[i] = palabra[i + 1];
                palabra[i + 1] = mem;
            }
        }

    } alert(palabra);
    console.log(palabra)
}