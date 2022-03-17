const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

const bListPkmn = pokemon.filter( p => p.name[0] === "B" );
const pkmnIds = pokemon.map( p => p.id )

// 1
const idDiv3Pkmn = pokemon.filter( p => p.id % 3 === 0 );
console.log( "\nPokemones con ID divisible por 3:" );
console.log( idDiv3Pkmn );

// 2
const fuegoPkmn = pokemon.filter( p => p.types[0] === "fire" || p.types[1] === "fire" );
console.log( "\nPokemones tipo fuego:" );
console.log( fuegoPkmn );

// 3
const typosPkmn = pokemon.filter( p => p.types.length > 1 );
console.log( "\nPokemones con mas de 1 tipos:" );
console.log( typosPkmn );

// 4
const namePkmn = pokemon.map( p => [p.name] );
console.log( "\nMatriz con los nombres de los Pokemones:" );
console.log( namePkmn );

// 5
const nameId5Pkmn = pokemon.filter( p => p.id > 99 ).map( p => [p.name] );
console.log( "\nMatriz con los nombres de los Pokemones con ID mayor a 99:" );
console.log( nameId5Pkmn );

// 6
const nameTipoVenenoPkmn = pokemon.filter( p => p.types.length == 1 && p.types[0] === "poison" ).map( p => [p.name] );
console.log( "\nMatriz con los nombres de los Pokemones de tipo veneno:" );
console.log( nameTipoVenenoPkmn );

// 7
const tipoVoladorPkmn = pokemon.filter( p => p.types[1] === "flying" ).map( p => [p.types[0]] );
console.log( "\nMatriz del primer tipo de los Pokemones cuyo segundo tipo es volador:" );
console.log( tipoVoladorPkmn );

// 7
const cantidadNormalPkmn = pokemon.filter( p => p.types[0] === "normal" || p.types[1] === "normal" ).length;
console.log( "\nRecuento de la cantidad de pokémon que son de tipo normal:" );
console.log( cantidadNormalPkmn );