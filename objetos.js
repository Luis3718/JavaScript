// Objetos en JS
// Un objeto es una estructura de datos que guarda valores a traves de un 
// Key : value
// propiedad : valor de la propiedad
/*
    objeto{
        propiedad: valor,
        propiedad: valor 
    }

    Metodos: son funciones que estan dentro de los objetos que 
    ayudan a generar interaccion con estos mismos
*/
console.log("-----Ejemplo de creacion de un objeto con propiedades y metodos-------")
const persona = {
    // Propiedades
    nombre: "Luis",
    edad: 24,
    direccion:{
        calle: "av insurgentes",
        ciudad:"Ciudad de mexico"
    },
    // Metodo
    saludar(){
        console.log(`Hola me llamo ${persona.nombre}`)
    }
}

console.log(persona)
persona.saludar()

// Se pueden agregar nuevas propiedades o metodos a los objetos
console.log("-----Ejemplo de agregar propiedades y metodos a un objeto-------")
persona.telefono = "5521321245"
console.log(persona.telefono)
console.log(persona)

persona.despedir = () => {
    console.log("adios")
}
console.log(persona.despedir())
console.log(persona)

// Se pueden eliminar propiedades o metodos de un objeto creado
console.log("-----Ejemplo de eliminar propiedades o metodos de un objeto-------")
delete persona.telefono
console.log(persona)
delete persona.despedir
console.log(persona)

// Funcion constructora
console.log("-----Ejemplo de funcion constructora-------")
function Persona(nombre, apellido, edad){ //<- tiene que inciar con mayuscula
    // Propiedades
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad
}

// Se genera una instancia
// Todo objeto proveniente de una funcion constructora es una instancia
const persona1 = new Persona("Luis", "Alvarado", 24)
console.log(persona1)
const persona2 = new Persona("Diego", "G", 43)
console.log(persona2)

// Agregar instancias una ves creada la funcion constructuroa
// prototype permite a las funciones compartir y/o heredar 
// propiedades y/o métodos.
/*
    Que es prototype 
    Es un objeto asociado a las funciones constructoras y clases,
    que se utiliza para compartir métodos y propiedades entre todas las instancias
    creadas a partir de ellas.
    Cuando accedes a una propiedad o método en un objeto, 
    si no está en el objeto mismo, JavaScript lo busca en su prototype 
    siguiendo la cadena de prototipos (prototype chain).
    Usar prototype ahorra memoria porque los métodos se almacenan una sola vez
    y no se duplican en cada instancia.

    Ejemplos:

    Métodos (funciones que comparten todas las instancias)
    ¿Dónde ponerlo?
    prototype
    Motivo
    Evita duplicación en memoria

    Propiedades únicas por instancia (nombre, edad, id, etc.)
    ¿Dónde ponerlo?
    Constructor (this.propiedad)
    Motivo
    Cada objeto necesita su propio valor

    Valores por defecto simples (string, número, boolean)
    ¿Dónde ponerlo?
    prototype (opcional)
    Motivo
    Actúa como valor de respaldo

    Propiedades mutables (arrays, objetos)
    ¿Dónde ponerlo?
    Constructor (this.propiedad = [])
    Motivo
    Evita que se compartan entre instancias
*/


console.log("-----Ejemplo de prototype propiedades-------")
Persona.prototype.telefono = "5555555555"
console.log(Persona.prototype); 
console.log(persona1.telefono)

// Se pueden agregar propiedades a instancias especificas ya creadas
console.log("-----Ejemplo de propiedades especificas a instancias-------")
persona1.nacionalidad = "Mexicana"
console.log(persona1)
console.log(persona2)

// Agregar metodos a traves del prototipo
console.log("-----Ejemplo de prototype metodos-------")
Persona.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

persona1.saludar()
persona2.saludar()

// Nuevas formas de construir objetos (syntactic sugar) utilizando clases
console.log("-----Ejemplo de clases-------")
// Este es un molde de mi objeto
class Personas {
    //El constructor Define como se debe configurar las propiedades del objeto
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad}`)
    } 
}

const persona3 = new Personas("luis",25)
persona3.saludar()

// Herencia 
console.log("-----Ejemplo de herencia-------")
class Animal{
    constructor(nombre, tipo){
        this.nombre = nombre,
        this.tipo = tipo
    }

    emitir_sonido(){
        console.log("El animal emite un sonido")
    }
}

// Para herencia utilizamos la palabra reservada extends para las clases hijas
class Perro extends Animal{
    constructor(nombre, tipo, raza){
        // Nos permite utilizar los atributos que viene de la clase padre
        super(nombre, tipo)
        this.raza = raza
    }
    // Podemos sobreescribir metodos de la clase padre
    emitir_sonido(){
        console.log("Wuuuuaff")
    }

    correr(){
        console.log(`${this.nombre} corre rapidamente`)
    }
}

const perro1 = new Perro("Chewbacca", "Perro", "Yorkshire")
console.log(perro1)
perro1.emitir_sonido()
perro1.correr()

console.log("-----Ejemplo de inyeccion de metodos al prototype de la case-------")
Perro.prototype.segundo_metodo = function(){
    console.log("Un nuevo metodo")
}

Animal.prototype.tercer_metodo = function(){
    console.log("Tercer metodo")
}
perro1.segundo_metodo()
perro1.tercer_metodo()
console.log(Perro)