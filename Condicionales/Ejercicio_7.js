//Entrada
console.log("7. Escribir un algoritmo que determine si un año es bisiesto o no");
console.log("Ingrese un año: ");
let año=2013

//Proceso y //Salida
if ((año%4==0) && (año/100 != 0 || año%400==0)){
    console.log("El año es bisiesto");
}else{
    console.log("El año no es bisiesto");
}