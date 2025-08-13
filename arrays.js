// Los arrays son objetos en los que se almacenan muchos valores en una sola
// variable

// Se puede crear con la palabra Array() o utilizando new Array()
console.log("-----Ejemplo de array-------")
let frutas = new Array("Manzana","Papaya","Pera")
console.log(frutas)
// No se puede crear un array con un solo numero
console.log("-----Ejemplo de array reservado-------")
const number = Array(12) // <- esto solo reserva la memoria de las 12 posiciones
console.log(number)
// Array literal syntax
console.log("-----Ejemplo de impresion de posicion de array-------")
const one_number = [4]
console.log(one_number)
// Los array pueden ser mixtos tambien conteniendo diferentes tipos de variables
console.log("-----Ejemplo de array mezclado-------")
const receta = [
    "1 Taza",
    2,
    {
        Cantidad : "3 litros",
        Ingrediente: "Mango"
    },
    false
]
console.log(receta)

// Se puede acceder a los array por medio de el nombre de la variable y []
// indcando la posicion en la cual queremos acceder
console.log(receta[3])

// Ejercicio practico para recorrer un array
console.log("-----Ejercicio de recorrido de array-------")
const numeros = [2,4,5,69,12]
let suma = 0
for (i in numeros){
    suma+=numeros[i]
}

console.log(suma)

// Propiedades de los arrays 
// Length
console.log("-----Ejemplo de array.length-------")
console.log(receta.length)

// Revisar si es un array con .isArray()
console.log("-----Ejemplo de .isArray-------")
const es_array = Array.isArray(frutas)
console.log(es_array)

// Metodos de los arrays
console.log("\n-----MUTABLES-------")
// Mutables son los metodos que modifican el array original 
// .push y .pop
console.log("-----Ejemplo de .push y .pop-------")
frutas.push("Sandia") //<-- agrega un nuevo elemento a nuestro array original
console.log(frutas)
frutas.pop() //<-- elimina el utlimo elemento elemento a nuestro array original
console.log(frutas)

// Imutabilidad son los metodos que no modifican el array original
console.log("\n-----INMUTABLES-------")
// .concat agrega 1 o mas elementos al array creando un nuevo array
console.log("-----Ejemplo de .concat-------")
const mas_frutas = frutas.concat("uva", "feesa")
console.log(frutas)
console.log(mas_frutas)
// .map itera sobre cada uno de los elementos y ejecuta una funcion 
// creando un nuevo array
console.log("-----Ejemplo de .map-------")
const num = [2,4,5,69,12]
const cuadrados = num.map(num => num * num)
console.log(num)
console.log(cuadrados)
// .foreach itera sobre cada uno de los elementos y ejecuta una funcion
console.log("-----Ejemplo de .foreach-------")
const colores = ["rojo", "amarillo", "azul"]
const iteracion = colores.forEach(color => console.log(color))
console.log(colores)
console.log(iteracion)
// Ejercicio de conversion de Fahrenheit a Celsius
console.log("-----Ejercicio de .map-------")
const temp_fahrenheit = [32, 53, 23, 84, 23, 28]
const temp_celsius = temp_fahrenheit.map(fahrenheit => (5/9) * (fahrenheit-34))
console.log(temp_fahrenheit)
console.log(temp_celsius)
// Ejercicio practico para la sumatoria de un array
console.log("-----Ejercicio de .foreach-------")
let sum = 0
numeros.forEach(num => 
    sum+=num
)
console.log(sum)
// .filter itera sobre un array y crea un nuevo array con 
// los elementos que cumplen cierta condicion dada por una funcion
console.log("-----Ejemplo de .filter-------")
const pares = num.filter(num => num % 2 == 0)
console.log(num)
console.log(pares)
// .reduce ejecuta una funcion reductora sobre una array devolviend 
// un unico resultado puede usarse de distintos modos
// modo 1 para obtener un resultado de sumatoria
console.log("-----Ejemplo de .reduce caso 1-------")
const numeros_reduce = [1,2,3,4,5]
const resultado = numeros_reduce.reduce((acumulador,valor_actual) => acumulador + valor_actual, 0)
console.log(numeros_reduce)
console.log(resultado)

// modo 2 para obtener las palabras repetidas
console.log("-----Ejemplo de .reduce caso 2-------")
const palabras=["hola","adios","bye","bye","hola"]
const frecuencia_palabra = palabras.reduce((acumulador, valor_actual)=>{
    if (acumulador[valor_actual]){
        acumulador[valor_actual]++
    }else{
        acumulador[valor_actual]=1
    }
    return acumulador
},{})

console.log(frecuencia_palabra)

// .find devuelve el primer valor de un arrray que cumpla con la funcion de prueba
console.log("-----Ejemplo de .find-------")
const array_buscar = [1,3,0,-3,19,7,12]
const encontrar = array_buscar.find(number => number >=10 )

console.log(array_buscar)
console.log(encontrar)

// .find devuelve el indice del primer valor de un arrray que cumpla 
// con la funcion de prueba, si no encuentra algun valor que satdisfaga 
// la condicion devuelve -1
console.log("-----Ejemplo de .findindex-------")
const encontrar_indice = array_buscar.findIndex(number => number >=10 )

console.log(array_buscar)
console.log(encontrar_indice)

// .slice devuelve una porcion del array indicando posicion incial del indice
//  y final, podemos dejar solo el indicie incial y tambien podemos usar 
// indices negativos para indicar donde inciar o acabar
console.log("-----Ejemplo de .slice-------")
console.log(array_buscar)
console.log(array_buscar.slice(0,3))
console.log(array_buscar.slice(3))
console.log(array_buscar.slice(-4))

// spread crea una copia de un array [...]
console.log("-----Ejemplo de spread clonar-------")
const array_original = [1, 4, 4, 5, 6, 1]
const array_copia = [...array_original]
console.log(array_original)
console.log(array_copia)

// spread combinar array [...array,...array]
console.log("-----Ejemplo de spread combinar-------")
const array_1 = [1, 4, 4, 5, 6, 1]
const array_2 = [3, 3 ,5 ,7, 1, 3]
const array_combinado = [...array_1, ...array_2]
console.log(array_1)
console.log(array_2)
console.log(array_combinado)

// spread combinar array [...array,...array]
console.log("-----Ejemplo de spread copiar con nuevos elementos-------")
const array_3 = [1, 4, 4, 5, 6, 1]
const array_nuevo = [...array_3, 23, 45, 66]
console.log(array_1)
console.log(array_nuevo)

// spread pasar elementos a una funcion
console.log("-----Ejemplo de spread pasar elementos a funciones-------")

function sumas(a, b, c){
    return a + b + c
}

const numeross = [1, 2, 3]
const resultados = sumas(...numeross)
console.log(resultados)