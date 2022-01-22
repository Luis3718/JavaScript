/*Existen 2 tipos de coerciones*/
//coerciones implicitas
/*El lenguaje nos ayuda a cambiar de un tipo 
de valor a otro tipo de valor
Ejemplo:
4 + "7"; //47
4 * "7"; //28
*/
var a = 4 + "7"; //genera una concatenacion con el +
console.log(a);
typeof a; //nos da un valor tipo string por la concatenacion
var b = 4 * "7"; //genera una operacion con el *
console.log(b);
typeof b; //nos da un valor tipo number por la operacion
//coerciones explicitas
/*Es la forma en la que nosotros obligamos a que
un valor de un tipo cambie a otro tipo de valor
Ejemplo:

*/
var a = 20;
var b = a + "";
typeof b;
/*asi convertimos a nuestra variable en un string 
pero es de manera implicita*/

var c = String(a);
typeof c;
/*asi convertimos a nuestra variable en un string 
pero es de manera explicita usando el metodo String*/

var d = Number(c);