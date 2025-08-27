// Programacion sincrona y asincrona
/*
    Memory heap: es el espacio donde se guardan todas las variables y objetos de
    mi programa y estos se almacenan aleatoriamente.
    
    Call stack: es la pila donde se llaman las funciones que se ejecutan dentro de 
    nuestro programa.

    Programacion sincrona (sync): es cuando se ejecuta una tarea a la vez

    Programacion asincrona (async): es cuando se ejecutan varias tareas en simultaneo

    como funciona la programacion asincrona, esta es llamada a traves del Call stack
    es movida a una parte del navegador llamada Web APIsen el que trabaja 
    su ejecucion y una ves resuelta la funcion es movida a una parte llamada 
    Callback Queue, posteriormente el Event Loop revisa si el Call stack esta libre 
    para poder mover nuestra funcion asincrona a nuestro Call stack
*/

/* 
    Promesas: las promesas son la manera en la que hacemos que nuestro codigo tenga 
    la capacidad de convertirse en asincrono 
    Se crean mediante la palabra reservada Promise()
    
    tienen 3 estados
    Pending: es el estado que tienen cuando se crea la promesa
    Fullfield: es cuando la promesa se resuelve para bien o para mal
    Rejected: es cuando la promesa no se resolvio por algun motivo 

    tienen 2 tipo de callback
    Resolved: cuando la promesa se resuelve de forma satdisfactoria
    Rejected: cuando la promesa no se puede resolver

    Metodos importantes en las promesas
    then(): se ejectua cuando la promesa esta resuelta (fullfield) y obtiene el 
    callback de resolved
    catch(): se ejecuta cuando la promesa no se resuelve y podemos obtener el error 
    de lo que paso
*/

console.log("-----Ejemplo de promesas-------")
const promesas = new Promise((resolve,reject) => {
    setTimeout(() =>{
        let operacion_exitosa = true
        if (operacion_exitosa){
            resolve("La operacion fue exitosa")
        }else{
            reject("Fallo la operacion")
        }
    },100)
})

promesas.then((mensaje_existoso) => {
    console.log(mensaje_existoso)
}).catch((mensaje_error)=>{
    console.log(mensaje_error)
})

console.log(promesas)
console.log("prueba")

// Async and await, estos devuelven una promesa
console.log("-----Ejemplo de Async Wait-------")
/* 
function fetchData(){
    fetch("https://pokeapi.co/api/v2/pokemon/mew")
        .then((response)=>response.json())
        .then((data)=>console.log(data))
        .catch((error)=>console.log(error))
}
*/
// con el async js espera que regrese una promesa
async function fetchData(){
    try{
        // await espera que se resuelva la promesa
        let response = await fetch("https://pokeapi.co/api/v2/pokemon/mew")
        let data = await response.json()
        console.log(data)
    }catch(error){
        console.log(error)
    }
}

fetchData()

// Peticiones multiples con async and await (for await...of)
console.log("-----Ejemplo de for awaut of-------")
const urls=["https://pokeapi.co/api/v2/pokemon/mew",
    "https://pokeapi.co/api/v2/pokemon/ditto",
    "https://pokeapi.co/api/v2/pokemon/mewtwo"]

async function fetchNewData() {
    try{
        for await(let url of urls){
            let response = await fetch(url)
            let data = await response.json()
            console.log(data)
        }
    }catch(error){
        console.log(error)
    }
}

fetchNewData()