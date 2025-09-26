
function verificarUsuario(usuario) {
    return new Promise((resolve, reject) => {
        if (usuario=="admin" ) {
            resolve("Usuario verificado");
        } else {
            reject("Usuario no verificado");
        }           
    });
}
verificarUsuario("admin")
    .then(res => console.log(res))
    .catch(err => console.log(err));

verificarUsuario("Regina")
    .then(res => console.log(res))
    .catch(err => console.log(err));    



//Crea una función obtenerDatos() que simule una llamada a una API con setTimeout y usar async/await para esperar el resultado.

function simularPeicionAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos obtenidos de la API");
        }, 5000);
    });
}

async function obtenerDatos() {
    const resultado = await simularPeicionAPI();
    console.log(resultado);
    return resultado;
}   

obtenerDatos()
    .then(datos => {console.log("Proceso completado: ", datos);})
    .catch(err => {console.log("Error:", err);
    });

//Crea una función que use fetch para obtener datos de una API pública y maneje los errores con try/catch.});