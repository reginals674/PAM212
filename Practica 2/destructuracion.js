const persona={
    nombre:"Regina",
    edad:19,
    direccion:{ 
        ciudad:"Qro",
        pais:"MX"
    }           
};


// extracción 
const {nombre,edad,direccion:{ciudad, pais}}=persona;    

//mensaje
console.log( "Me llamo "+ nombre+ ", Tengo "+ edad+ " años y vivo en "+ ciudad);
