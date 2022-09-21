const diasenmes = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var dia1 = parseInt(prompt("introduce un dia"));
var mes1 = parseInt(prompt("introduce un mes en numero, por ejemplo Enero=1, Febrero=2,..."));
var dia2 = parseInt(prompt("introduce otro dia"));
var mes2 = parseInt(prompt("introduce otro mes en numero, por ejemplo Enero=1, Febrero=2,..."));
var totaldias1 = 0;
var totaldias2 = 0;

for(let i=0; i <= mes1; i++){
    totaldias1 += diasenmes[i];
}
for(let i=0; i <= mes2; i++){
    totaldias2 += diasenmes[i];2
}

console.log(totaldias1)
console.log(totaldias2)
totaldias1 += dia1;
totaldias2 += dia2;
diferencia= totaldias1 - totaldias2;
console.log(diferencia);
if(diferencia < 0){
    diferencia = diferencia * -1;
}
alert("La diferencia de dias entre fechas es de " + diferencia + " dias");