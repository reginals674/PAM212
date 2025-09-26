
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
