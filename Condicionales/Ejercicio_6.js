//Entrada
console.log("6. Dados dos números A y B, sumarlos si al menos uno de ellos es negativo, en caso contrario multiplicarlos");
console.log("Ingrese un numero: ");
let a=-50;

console.log("Ingrese otro numero: ");
let b=10;

//Proceso y //Salida
if (a < -1 && b > 1) {
    suma=b+a
    console.log("El resultado es: ",suma);  

}else if(a > 1){
    multiplicacion=a*b
    console.log("El resultado es: ",multiplicacion);
}else{
    console.log("Ingrese otro valor");
}
