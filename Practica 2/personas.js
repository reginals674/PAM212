const  personas = [
    {  nombre: "Ana", edad: 22 },
    {  nombre: "Luis", edad: 35 },
    {  nombre: "Maria", edad: 28 }
];

console.log("busca a Luis");
//busca personas con .find
let buscar = personas.find( persona => persona.nombre == "Luis" );
console.log(buscar);


console.log("imprimir elementos del arreglo");
//imprimir el arreglo con .forEach
personas.forEach( personas => console.log(personas) );


console.log("sumar edades");
//sumar edades con .reduce
let total = personas.reduce( (edadTotal, persona) => edadTotal + persona.edad, 0);
console.log(total);
