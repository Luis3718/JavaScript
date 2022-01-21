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