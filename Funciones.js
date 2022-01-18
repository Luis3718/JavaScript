/*Tipos de funciones*/
//Declarativas 
//Se ocupa la palabra clave function

function Funcion1()
{
    return 1;
}

Funcion1();

//Expresion o funciones anonimas
//La guardamos dentro de una variable 

var Funcion2=function(a,b)
{
    return a + b;
}

Funcion2();

//Asi creamos un template string al cual le podemos conectar una base de datos 
//para que imprima distintos nombres conforme a la base de datos
function Saludar(estudiante)
{
    console.log(`Hola ${estudiante}`); 
    //console log nos regresa de manera clara y por medio de la linea de comandos lo que tenga nuestra variable
}