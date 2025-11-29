import {Usuario} from '../models/usuario';
import DatabaseService from '../database/DatabaseService';

export class UsuarioController {

    constructor() {
        this.Listeners = [];
    }
    async initialize() {
        await DatabaseService.initialize();
    }
    async obtenerUsuarios() {
        try {
            const data = await DatabaseService.getAll();
            return data.map(u => new Usuario(u.id, u.nombre, u.fechaCreacion));
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            throw new Error('Error al obtener usuarios: ' + error);
        }
    }

    async crearUsuario(nombre) {
        try {
            Usuario.validar(nombre);
            const nuevoUsuario = await DatabaseService.add(nombre.trim());
            this.notifyListeners();
            return new Usuario(nuevoUsuario.id, nuevoUsuario.nombre, nuevoUsuario.fechaCreacion);
        }catch (error) {
            console.error('Error al crear usuario:', error);
            throw error;
        }   
    }
    addListener(callback) {
        this.Listeners.push(callback);
    }
    removeListener(callback) {
        this.Listeners = this.Listeners.filter(l => l !== callback);
    }
    notifyListeners() {
        this.Listeners.forEach(callback => callback());
    }

    async actualizarUsuario(id, nombre) {
        try {
            Usuario.validar(nombre);
            const usuarioActualizado = await DatabaseService.actualizar(id, nombre.trim());
            this.notifyListeners();
            return new Usuario(usuarioActualizado.id, usuarioActualizado.nombre, usuarioActualizado.fechaCreacion);
        } catch (error) {
            console.error('Error al actualizar usuario:', error);
            throw error;
        }
    }
    async eliminarUsuario(id) {
        try {
            await DatabaseService.eliminar(id);
            this.notifyListeners();
            return id;
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
            throw error;
        }
    }
    
}
