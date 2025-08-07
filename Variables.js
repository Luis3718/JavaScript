/*Una variables es un espacio reservado de memorai*/
var nombre="Luis"; /*var es una palabra reservada para declarar una variable*/

/*Tipos de estados*/

var edad; //declarativo

edad; //en este momenton edad es undefined por que no tiene un tipo de dato primitivo dentro

edad=14; //inicializar la variable con un int

edad; //En este momento ya la reconoce como tipo numero

var Elementos=["Computadora","Celular"]; //Es un array de tipo string 

var Persona={
    nombre: "Luis",
    edad: 21
};
//Forma de generar un objeto dentro de JavaScritp;

Persona;


// Las variables se crean con let
let CajadeAndy="Woody"
console.log(CajadeAndy)

// Las constantes se crean con const
const Pi=3.1416
console.log(Pi)

//tipo de datos en JS
//Primitivos

//String (Cadenas de caracteres)
let Nombre = 'Luis'

//Number
let Edad = 24

//Boolean 
let mayor_edad = true

//NULL
let sin_valor = null

//Undefiend
let no_definido = undefined

//Symbol se utiliza para valores unicos
let simbolo_unico = Symbol('unico')

//bigint para datos muy grandes
let numero_grande = 2n

//Complejos

//object 
let carro = {
    marca: 'tesla',
    modelo: 'model s'
}

//arrays
let frutas = ['manzana','banana','pera']

//funcion
function saludar(){
    
}