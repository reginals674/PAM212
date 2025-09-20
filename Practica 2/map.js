const productos =[
    { nombre:"Laptop",precio:12000 },
    { nombre:"Mouse",precio:250 },
    { nombre:"Teclado",precio:750 },
    { nombre:"Monitor",precio:3000 }
]

//filtra productos mayores a 1000 con .map 


let filtrar = productos.filter( producto => producto.precio > 1000); 
   console.log(filtrar);    
let productos_resultado=filtrar.map( producto =>  producto);
console.log(productos_resultado);



