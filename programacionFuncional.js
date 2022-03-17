function generaPromedio( calificaciones ){
    let promedio = 0;
    for(let i=0; i<calificaciones.length; i++){
        console.log( "Stack: " + calificaciones[i].stack );
        console.log( "Calificacion: " + calificaciones[i].calificacion );
        promedio += calificaciones[i].calificacion;   
    }
    return promedio / calificaciones.length;
}
function imprimeDatos( estudiante, promedio ){
    console.log( "Nombre: " + estudiante.nombre );
    console.log( "Apellido: " + estudiante.apellido );
    console.log( "Edad: " + estudiante.edad );

    let resultado = promedio( estudiante.calificaciones );
    console.log( "El promedio de las calificaciones es: " + resultado );
}
let estudiante = {
    nombre : "Alex",
    apellido : "Martinez",
    edad : 25,
    calificaciones : [{
        stack : "Python",
        calificacion : 9.5
    },
    {
        stack : "Java",
        calificacion : 9.1
    },
    {
        stack : "CSS",
        calificacion : 9.7
    }]
}
imprimeDatos( estudiante, generaPromedio );


const filtroDeCursos = (curso) => curso.calificacion >= 9.5;
let resultado = estudiante.calificaciones.filter( filtroDeCursos );
console.log( resultado );

const objetosAnumeros = ( stack ) => stack.calificacion;
resultado = estudiante.calificaciones.map( objetosAnumeros );
console.log( resultado );


//ALGUNAS FUNCIONES: .forEach() .sort() .reduce()

function parentFunction( callback ) {
    callback( "information from the parent function" );
}

parentFunction( function(message) {
    console.log( message );
});

const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
console.log( items );
//console.log( items.sort() );  // esto lanzará un error
const sortedItems = [...items].sort();
console.log( sortedItems );

const numbers = [10, 5, 3, 12, 22, 8];
console.log( numbers );
console.log( numbers.sort() );
console.log( numbers.sort( function(a, b){return a - b}) );  // Ascendente
console.log( numbers.sort( Descendente = (a, b) => b - a ) );  // Descendente