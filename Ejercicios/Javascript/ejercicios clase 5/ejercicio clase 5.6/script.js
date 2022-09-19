var n = 9;
var n2 = 9;
console.log(n == n2); // Devuelve true porque son iguales los contenidos de las variables
var n3 = 109;
console.log(n == n3); // Devuelve false porque no son iguales los contenidos de las variables
var n4 = '9';
console.log(n == n4);// Devuelve true porque son iguales los contenidos de las variables aunque no los tipos
var n5 = 9.0;
console.log(n == n5);// Devuelve true porque son iguales los contenidos de las variables aunque no los tipos

var n = 9;
var n2 = 9;
console.log(n === n2); // Devuelve true porque son iguales los contenidos de las variables y los tipos
var n3 = 109;
console.log(n === n3); // Devuelve false porque no son iguales los contenidos de las variables
var n4 = '9';
console.log(n === n4);// Devuelve false porque son iguales los contenidos de las variables aunque no los tipos
var n5 = 9.0;
console.log(n === n5);// Devuelve true porque son iguales los contenidos de las variables y los tipos

var n = 9;
    var n2 = 9;
    console.log(n != n2); // Devuelve false porque son iguales los contenidos de las variables
    var n3 = 109;
    console.log(n != n3); // Devuelve true porque no son iguales los contenidos de las variables
    var n4 = '9';
    console.log(n != n4);// Devuelve false porque son iguales los contenidos de las variables aunque no los tipos
    var n5 = 9.0;
    console.log(n != n5);// Devuelve false porque son iguales los contenidos de las variables aunque no los tipos
    
    var n = 9;
    var n2 = 9;
    console.log(n !== n2); // Devuelve false porque son iguales los contenidos de las variables y los tipos
    var n3 = 109;
    console.log(n !== n3); // Devuelve true porque no son iguales los contenidos de las variables
    var n4 = '9';
    console.log(n !== n4);// Devuelve true porque no son iguales los tipos de las variables
    var n5 = 9.0;
    console.log(n !== n5);// Devuelve false porque son iguales los contenidos de las variables y los tipos

    
    var n = 9; 
    console.log(!(n==9)); //Devuelve false porque la comparación da true y lo negamos
    console.log(!false); //Devuelve true porque estamos negando false

    
    var n = 9;
    console.log(n == 9 && n > 3); //Devuelve true porque las dos comparaciones dan true y el AND entre dos true es true
    console.log(n == 9 && n < 3); //Devuelve false porque n no es menor que 3

    
    var n = 9;
    console.log(n == 9 || n > 3); //Devuelve true porque las dos comparaciones dan true y el OR entre dos true es true
    console.log(n == 9 || n < 3); //Devuelve true porque la primera comparación es true
    console.log(n == 7 || n < 3); //Devuelve false porque las dos son false y el OR entre dos false es
