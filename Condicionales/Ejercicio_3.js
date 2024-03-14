//Entrada
console.log("3. Escriba un programa que lea tres números enteros positivos y que calcule e imprima en pantalla el menor y el mayor de ellos");
console.log("Ingrese un numero: ");
let num_1=2;

console.log("Ingrese un segundo numero: ");
let num_2=240;

console.log("Ingrese un tercer numero: ");
let num_3=10;

//Proceso y //Salida
if (num_1 > num_3 && num_1 > num_2){

    console.log("El numero mayor es ",num_1,"Y el numero menor es ",num_3);

}else if(num_2 > num_1 && num_2 > num_3){

    console.log("El numero mayor es ",num_2,"Y el numero menor es ",num_1);

}else if(num_3 > num_2 && num_3 < num_1){
    
    console.log("El numero mayor es ",num_3,"Y el numero menor es ",num_2);

}else{
    console.log("Ingrese valor enteros");
}