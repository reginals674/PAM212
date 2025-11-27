export class Usuario {
    constructor(id, nombre, fechaCreacion) {
        this.id = id;
        this.nombre = nombre;
        this.fechaCreacion = fechaCreacion|| new Date().toISOString();
    }

    static validar(nombre) {
        if (typeof nombre !== 'string' || nombre.trim().length === 0) {
            throw new Error('El nombre no puede estar vacio.');
        }
        if (nombre.length > 50) {
            throw new Error('El nombre no puede exceder 50 caracteres.');
        }
        return true;
    }

    

}