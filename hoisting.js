/*El hoisting es cuando una variable o funciones 
se declara antes de que se procese cualquier 
tipo de codigo 
Esto solo funciona con ECMAScript 5
hacia abajo 
El hoisting es como un globo que sube
las variables y funciones a la hora de procesar
el codigo, entonces si hacemos una llamda 
de una funcion o una variable antes de declararlas
no marcara error, solo sufrira de hoisting
*/

//var nombre; //declaramos una variable

//nombre="Luis"; //inicializamos una variable

//ejemplo de hoisting

console.log("Hola "+nombre);

var nombre="Luis";

/*Esto sucede por que la funcion console log
 es leida por el compilador y ve que en los 
 parametros esta una variable entonces lo que 
 hace el compilador es:
 genera la variable de los parametros 
 var nombre=undefined;
 y despues vuelve a llamar al console log
 console.log(nombre)
 
 por lo tanto arroja un undefine*/

/*Hoisting en funciones: */

saludar();

function saludar()
{
    console.log("hola "+nombre);
}

var nombre="Luis";

/*El primer llamado a la funcion saludo va a 
sufrir de hoisting ya que nos va a mostar lo siguiente 
hola undefined esto es por que las funciones 
si pueden ser llamdas antes de ser declaradas pero 
surgue el undefined debido a que en el console log 
llamamos una variable que no ha sido declarada asi 
que sucede lo mismo que con las variables 
va a declarar nuestra variable 
y la inicializara como undefined 
por lo tanto a la hora de llamar la funcion esta nos 
arrojara un:
Hola undefined */

saludar();

/*Esta llamada si nos va arrojar el nombre Luis 
 ya que en este casi no sufrimos de hoisting 
 ya que la variable que se hace referencia en la 
 funcion  ya esta declarada e inicializada 
 por lo tanto al llamar la funcion esta nos arrojara
 un: 
 Hola Luis*/