//Entrada
console.log("6. Escribir un algoritmo que determine el área y el volúmen de un cilindro");
console.log("Ingrese el valor del r del cilindro ");
let r=5;
console.log("Ingrese el valor de la altura del cilindro ");
let h=10;

//Proceso
let A=2*3.1416*r;
let At=A*(r+h);
let V=3.1416*(r)**2;
let Vt=V*(h);

//Salida
console.log("El area del cilindro es ",At,"cm²  el volumen es ",Vt,"cm³");