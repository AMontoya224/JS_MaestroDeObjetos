// MAP()
console.log( "map()" );
const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );
console.log( groceries );
console.log( groceryList );

const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );
console.log( values );
console.log( cubes );

// FILTER()
console.log( "\nfilter()" );
const nums = [1, 2, 3, 4, 5];
const par = nums.filter( val => val % 2 === 0 );
console.log( nums );
console.log( par );

const cadena = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = cadena.filter( item => item.includes("o") );
console.log( cadena );
console.log( oFoods );

const numsArray = [1, 2, 3, 4, 5];
const imparCubes = numsArray.filter( val => val % 2 !==0 ).map( val => val**3 );
console.log( numsArray );
console.log( imparCubes );