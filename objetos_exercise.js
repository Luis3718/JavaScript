/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña
2. El sistema debe ser capaz de validar si el usuario y contraseÃ±a ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseÃ±a son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseÃ±a son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/

const usersDatabase = [
  {
    username: "andres",
    password: "123",
  },
  {
    username: "caro",
    password: "456",
  },
  {
    username: "mariana",
    password: "789",
  },
];

const usersTimeline = [
  {
    username: "Estefany",
    timeline: "Me encata Javascript!",
  },
  {
    username: "Oscar",
    timeline: "Bebeloper es lo mejor!",
  },
  {
    username: "Mariana",
    timeline: "A mi me gusta mÃ¡s el cafÃ© que el tÃ©",
  },
  {
    username: "andres",
    timeline: "Yo hoy no quiero trabajar",
  },
];

// variables para ingresar los datos (solo funciona mediante el navegador)
//const usuario = prompt("Ingresa tu usuario: ")
//const contra = prompt("Ingresa tu contraseña: ")

// Funcion que recorre el array de usersDatabase 
function encontrar_usuario(usuario, contra){
    // Definimos una varibale user para que itere el objeto usersDatabase
    for(const user of usersDatabase){
        // Evaluamos si mi nombre de usuario y la contraseña coinciden devuelva verdadero
        if (user.username == usuario && user.password == contra){
            return true
        }
    }
    // Si ya recorrimos todo el array y no hubon coincidencias retornamos falso
    return false
}

function iniciar_sesion(usuario, contraseña){
    // Primero evaluamos si el usuario existe
    if(encontrar_usuario(usuario,contraseña)==true){
        // Recorremos el arreglo con los timelines de los usuarios
        for (const usr of usersTimeline){
            // Si encontrammos coincidencia con nuestro usuario, mostramos el timeline
            if(usr.username==usuario){
                console.log(`Bienvenido ${usr.username}`)
                console.log(usr.timeline)
            }
        }
    }
}
iniciar_sesion("andres","123")