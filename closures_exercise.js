/*
  Un Closure: es una funcion que tiene acceso a las variables de un ambito
  externo, incluso despues de que la funcion haya terminado de ejecutarse

  un Ambito lexico: es que cada vez que se declara una funcion, crea su 
  propio ambito lexico y puede acceder a las variables dentro de ese ambito 
  y a las variables de ambitos superiores
*/

function outer_function() {
  let outer_variable = "I am from outer function"

  function intern_function () {
    console.log(outer_variable)
  }

  return intern_function
}

const closure_example = outer_function()
closure_example()

function crearContador() {
  let contador = 0;

  return function() {
    contador++;
    console.log(contador);
  };
}

const contar = crearContador();

contar(); // 1
contar(); // 2
contar(); // 3