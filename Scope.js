/*El scope es el alcance que tiene las variables*/
var nombre="Luis"; //scope global

//tipos de scope
//global
//existen tosas las vaiables y las declaraciones del codigo

//local
//se crea al inicializar una funcion y solo que esta dentro de la funcion es lo que tiene acceso a ese scope
//el scope local si tiene acceso al global pero el global no tiene acceso al local

function imprimir()
{
    var apellido="Alvarado Romero"; //scope local
    return nombre+" "+apellido;
}

// Contextos de ejecucion Scopes

// Ejemplo 1
// Contexto Global
// Desde el contexto global NO se puede acceder a contextos locales
const product_name = 'smartphone'
const price = 499
const brand = "TechCo"

function get_product_details (){
    // Contexto Local
    // Desde el contexto local SI se puede acceder a contextos globales
    // Desde contextos locales TAMPOCO se pueden comunicar
    const product_name = "Laptop"
    const price = 899

    return `The ${product_name} costs $${price} and is from brand ${brand}`
}

console.log(get_product_details())

console.log(`The ${product_name} costs $${price} and is from brand ${brand}`)

// Un bloque en JS es todo aquello que esta dentro de {}