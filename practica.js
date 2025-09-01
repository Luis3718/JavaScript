let edad = 10

if (edad>=18){
    console.log("Eres mayor de edad")
}else{
    console.log("Eres menor de edad")
}

let frutas = ["manzana", "pera", "uva"];

frutas.push("plátano");   // ["manzana","pera","uva","plátano"]
frutas.pop();             // ["manzana","pera","uva"]
frutas.shift();           // ["pera","uva"]
frutas.unshift("kiwi");   // ["kiwi","pera","uva"]

let colores = ["rojo","verde","azul"]

colores.push("amarillo")
colores.shift()
colores.unshift("negro")

console.log(colores)

let a=10
let b="10"

console.log(a==b)
console.log(a===b)

// Ejercicio de principiante

/*
    Debes escribir un código en JavaScript que:
    1- Cree un array vacío llamado tareas.
    2- Agregue al menos 3 tareas al array usando push().
    3- Muestre todas las tareas en consola numeradas (ejemplo: 1. Lavar platos).
    4- Elimine la primera tarea y muestra en consola el array actualizado.
    5- Agregue una nueva tarea al inicio usando unshift().
    6- Cree una función llamada mostrarTareas() que recorra el array y muestre las tareas numeradas.
    7- (nivel un poco más alto) Dentro de la función, usa forEach para recorrer el array en lugar de un for clásico.
    8- (extra experto 🚀) Valida que si el array está vacío, la función muestre en consola "No tienes tareas pendientes".

    Solucion
    let tareas = []
    tareas.push("Lavar platos")
    tareas.push("Tender cama")
    tareas.push("Ordenar cuarto")

    for (let contador=0; contador<=tareas.length; contador++){
        console.log(`${contador+1}- ${tareas[contador]}`)
    }

    tareas.shift()
    console.log(tareas)

    tareas.unshift("Hacer el super")
    console.log(tareas)

    function mostrarTareas(tareas){
        if(tareas.length<=0){
            console.log("No tienes tareas pendientes")
        }else{
            tareas.forEach((tarea, contador=0) => {
                console.log(`${contador+1}- ${tarea}`)
            });
        }
    }

    let prueba=[]
    mostrarTareas(tareas)
    mostrarTareas(prueba)

*/

// Ejercicio intermedio
/*
    📝 Ejercicio Intermedio: Gestor de Tareas con Estado
    Objetivo: Modificar tu gestor de tareas para que cada tarea tenga un estado (pendiente o hecha) y puedas marcar tareas como completadas.
    Requisitos:
    1- Crear un array de objetos llamado tareas. Cada objeto debe tener:
        descripcion (string) → nombre de la tarea
        estado (string) → "pendiente" al crearla
    2- Crear una función agregarTarea(descripcion) que:
        Agregue un nuevo objeto al array con la descripción recibida y estado "pendiente".
    3- Crear una función mostrarTareas() que:
        Recorra el array y muestre índice + descripción + estado de cada tarea.
        Si no hay tareas, mostrar "No tienes tareas pendientes".
    5- Crear una función marcarHecha(indice) que:
        Cambie el estado de la tarea en la posición indicada a "hecha".
        Si el índice no existe, mostrar un mensaje de error.
    6- Probar todo:
        Agregar 3 tareas
        Mostrar tareas
        Marcar una tarea como hecha
        Mostrar tareas de nuevo
    💡 Extra experto:
        Usa forEach o map para recorrer el array dentro de mostrarTareas().
        Valida que la función marcarHecha no rompa si el índice está fuera de rango.
*/

// Declaramos vacio nuestro array que almacenara objetos con descripcion: , estado:
let tareas = []
function agregarTarea(tarea){
    tareas.push({
        descripcion: tarea,
        estado: "pendiente"
    })
}

// Mostramos las tareas mediante un recorrido al array por medio del metodo forEach
// si el arreglo esta vacio mandamos el menasje de que no existen tareas pendientes
function mostrarTareas(tareas){
    if(tareas.length<=0){
        console.log("No tienes tareas pendientes")
    }else{
        tareas.forEach((tarea,index) => console.log(`${index+1}- ${tarea.descripcion} ${tarea.estado}`))
    }
}

// Marcamos las tareas como hecha accediendo mediante el indice de la tarea
// si el indice es negativo o supera el numero de tareas que tenemos 
// mandamos un mensaje de error
function marcarHecha(indice){
    if(indice>tareas.length || indice<0){
        console.log("Error esa tarea no existe")
    }else{
        tareas[indice].estado="hecha"   
    }
}

agregarTarea("lavar platos")
agregarTarea("tender mi cama")
agregarTarea("ir al super")
mostrarTareas(tareas)
marcarHecha(1)
mostrarTareas(tareas)

// Agregar Eliminar y Filtrar Tareas
/*
    Nuevas Funciones a implementar
    1- eliminarTarea(indice)
        Recibe un índice y elimina la tarea correspondiente del array.
        Si el índice no existe, mostrar un mensaje de error.
        Usa el método splice (muy útil para eliminar en arrays).
    2- filtrarTareas(estado)
        Recibe un estado ("pendiente" o "hecha").
        Muestra solo las tareas que coincidan con ese estado.
        Si no hay tareas que cumplan el filtro, mostrar un mensaje adecuado.
        Aquí te conviene usar filter o incluso forEach si prefieres.
*/

// Funcion para elminar una tarea de mi array mediante el indice de la tarea
function eliminarTarea(indice){
    // Evaluamos que el numero de tarea exista dentro de mi array
    if(indice>tareas.length || indice<0){
        console.log("Error esa tarea no existe")
    // Si existe utilizamos el metodo splice para eliminar ese indice del array original
    }else{
        // Forma correcta de usar splice (inicio, numero de elemntos a eliminar)
        tareas.splice(indice, 1)
        //tareas.splice(indice,indice)
    }
}

/*
// funcion para filtrar tareas a traves del estado de la tarea
function filtrarTareas(estado){
    // Evaluamos si algun estado de los que tiene existe dentro de nuestro array
    // (no es la mejor manera)
    if(estado === "pendiente"){
        // Utilizamos el metodo filter el cual muestra los elementos que 
        // coincidan con la condicion dentro de la arrow function
        console.log(tareas.filter((tarea)=> tarea.estado === "pendiente"))
    }else if(estado === "hecha"){
        console.log(tareas.filter((tarea)=> tarea.estado === "hecha"))
    }else{
        console.log("No existe ninguna tarea con ese estado")
    }
}
*/

function filtrarTareas(estado){
    // Al ser un metodo mutable modifica nuestro array original asi que lo guardamos 
    // en una nueva variable  
    let filtradas = tareas.filter(tarea => tarea.estado.toLowerCase() === estado.toLowerCase())
    
    if(filtradas.length > 0){
        mostrarTareas(filtradas) // mostramos solo las filtradas
    }else{
        console.log("No existe ninguna tarea con ese estado")
    }
}

console.log("Pruebas")
eliminarTarea(0)
eliminarTarea(2)
mostrarTareas(tareas)

filtrarTareas("prueba")
filtrarTareas("hecha")