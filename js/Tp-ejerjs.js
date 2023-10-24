//1.-Escribe un programa de una sola línea que haga que aparezca en la pantalla
//un alert que diga “un mensaje”.

alert("tienes un mensaje nuevo");

//2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).

document.write("hello word"+" ");

//3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

document.write("el resultado de la suma de 3+5 es:" +" "+(3+5));

//4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
//Ejemplo: 
//input: Coder 
//Output: Hola Coder
let nombreUsuario=prompt("ingrese su nombre de usuario");
document.write("hola"+" "+nombreUsuario);

//5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
//Nota: Tener en cuenta la siguiente función: parseInt

let num1=parseInt(prompt("ingrese un numero aleatorio"));
let num2=parseInt(prompt("ingrese otro numero aleatorio"));
let resultado=(num1+num2)

document.write("el resultado de la suma de los numeros aleatorios es:"+" "+resultado);

//6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
//Ejemplo: 
//input: 15 , 3
//Output: El 15 es el número más grande

let numero1=parseInt(prompt("ingrese un numeros aletorios del 1 al 10"));
let numero2=parseInt(prompt("ingrese un numeros aletorios del 1 al 10"));

if(numero1>numero2){
    document.write("el numero mayor es:"+" "+numero1);
}else{
    document.write("el numero mayor es:"+" "+numero2);
}

//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
//Ejemplo: 
//input: 15 , 3, 9
//Output: El 15 es el número más grande

let numeros1=parseInt(prompt("ingrese un numeros aletorios del 1 al 20"));
let numeros2=parseInt(prompt("ingrese un numeros aletorios del 1 al 20"));
let numeros3=parseInt(prompt("ingrese un numeros aletorios del 1 al 20"));
let mayor

if(numeros1>numeros2&&numeros1>numeros3){
    document.write("el numero mayor es:"+" "+numeros1);
}else if (numeros2>numeros1&&numeros2>numeros3){
    document.write("el numero mayor es:"+" "+numeros2);
}else{
    document.write("el numero mayor es:"+numeros3);
}

//8.- Escribe un programa que pida un número y diga si es divisible por 2
//Ejemplo: 
//input: 10
//input: 15
//Output: El 10 es divisible por 2.
//Output: El 15 no es divisible por 2.

let nu1=parseInt(prompt("ingrese un numero aleatorio"));

if (nu1%2===0){
    document.write("el numero"+nu1+"ingresado es divisible por dos");
}else {
    document.write("el numero"+nu1+"ingresado no es divisible por dos");
}






