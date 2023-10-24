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

document.write("el resultado de los numeros aleatorios es:"+" "+resultado);