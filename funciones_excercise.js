// funciones en javascript

function calcular_precio(precio, porc_descuento){
    const descuento = (precio*porc_descuento)/100
    const precio_descuento = precio-descuento

    return precio_descuento;
}

let precio_original=20
let porcentaje_descuento=20

let precio_final= calcular_precio(precio_original,porcentaje_descuento)

console.log(`Precio original: ${precio_original}, Precio final: ${precio_final}`)


// Capacidades de funciones
// Callback es el poder pasar una funcion como argumento

function a() {}
function b(a) {}
b(a)

// Retornar funciones
function a(){
    function b(){}
    return b
}

//  Asignar funciones a variables --> Expresion de funcion 
const a_1 = function() {}

//Tener propiedades y metodos
function a(){}
const obj = {}
a.call(obj)

// Anidar funciones --> Nested Functions
function a(){
    function b(){
        function c(){}
        c()
    }
    b() 
}
a()

// Almacenar funciones en objetos --> son los metodos

const rocket = {
    name: "Falcon 9",
    launch_message: function launch_message(){
        console.log("🔥")
    }
}

rocket.launch_message()

// Funciones puras
// Caracteristica
// 1 - Dada una misma entrada siempre producen siempre la misma salida
// 2 - No producen efectos secundarios

// Efectos secundarios (Side effects)
// 1 - Si modifican variables globales
// 2 - Si modifican los parametros de nuestra funcion
// 3 - Solicitud HTTP o llamados a API
// 4 - Imprimir mensajes en pantalla o en consola
// 5 - Manipulacion del DOM
// 6 - Acceder a la hora o el dia actual     

// Estructura de una funcion pura
function sum(a, b){
    return a + b
}


// Funciones impuras
function sum_impura(a, b){
    console.log(`A: ${a}`)
    return a + b
}

let total = 0
function sum_side_effect(a){
    total = total + a
    return total
}

// Arrow Functions

const greeting = function (name) {
  return `Hi, ${name}`
}

// Arrow function - explicit return 

const newGreeting = (name) => {
  return `Hi, ${name}`
}

// Arrow function - implicit return 
const newGreetingImplicit = name => `Hi, ${name}`
const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hi, I'm ${name} ${lastName}`

// Lexical Binding
// 

const finctionalCharacter = {
  name: 'Uncle Ben',
  messageWithTraditionalFunction: function (message) {
    console.log(`${this.name} says: ${message}`)
  },
  messageWithArrowFunction: (message) => {
    console.log(`${this.name} says: ${message}`)
  }
}

finctionalCharacter.messageWithTraditionalFunction('With great power comes great responsability.')
finctionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus.')