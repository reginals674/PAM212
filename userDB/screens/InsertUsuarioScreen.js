import { useEffect, useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList,StyleSheet, Alert,ActivityIndicator,Platform,Modal } from 'react-native';
import { UsuarioController } from '../controllers/UsuarioController'; 
import { Ionicons } from '@expo/vector-icons';

const controller = new UsuarioController();


export default function InsertUsuarioScreen() {

  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [loading, setLoading] = useState(true);
  const [guardando, setGuardando] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [usuarioEditando, setUsuarioEditando] = useState(null);
  const [nombreEditado,setNombreEditado]=useState('');


  const cargarUsuarios = useCallback(async () => {
    try {
      setLoading(true);
      const data = await controller.obtenerUsuarios();
      setUsuarios(data);
      console.log('${data.length} Usuarios cargados:');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    const init = async () => {
      await controller.initialize();
      await cargarUsuarios();
    };
    init();
    controller.addListener(cargarUsuarios);
    return () => {
      controller.removeListener(cargarUsuarios);
    };
  }, [cargarUsuarios]);

  const handleAgregar = async () => {
     if(guardando || !nombre.trim()) return;
    try {
      setGuardando(true);
      const usuarioCreado= await controller.crearUsuario(nombre.trim());
      setNombre('');

      Alert.alert( 'Usuario creado', `"${usuarioCreado.nombre}" guardado con ID: ${usuarioCreado.id}`);

      
    }
    catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setGuardando(false);
    }
  };

  const abrirModalActualizar =(usuario) =>{
     setUsuarioEditando(usuario);
     setNombreEditado(usuario.nombre);
     setModalVisible(true);
  };

  const cerrarModal =()=>{
    setModalVisible(false);
    setUsuarioEditando(null);
    setNombreEditado('');
  }

  const handleActualizar = async () => {
    if (guardando || !nombreEditado.trim() || !usuarioEditando) return;
    try {
      setGuardando(true);
      await controller.actualizarUsuario(usuarioEditando.id, nombreEditado.trim());
      setModalVisible(false);
      setUsuarioEditando(null);
      setNombreEditado('');

      Alert.alert('USUARIO ACTUALIZADO CORRECTAMENTE');

    }catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setGuardando(false);
    }
  };

  const handleEliminar = async (id, nombreUsuario) => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Estás seguro de que deseas eliminar este usuario?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Eliminar', style: 'destructive', onPress: async () => {
            try {
              await controller.eliminarUsuario(id); 
              Alert.alert('Usuario eliminado' );   
            } catch (error) {
              Alert.alert('Error', error.message);
            }
          }
        }
      ]
    );
  };

  const renderUsuario = ({item, index}) => (
    <View style={styles.userItem}>
      <View style={styles.userNumber}>
        <Text style={styles.userNumberText}>{index + 1}</Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.nombre}</Text>
        <Text style={styles.userId}>ID: {item.id}</Text>
        <Text style={styles.userDate}>
          {new Date(item.fechaCreacion).toLocaleString('es-MX', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </Text>
      </View>
      <View style = {styles.opc}>
        <TouchableOpacity onPress={()=>handleEliminar(item.id,item.nombre)}>
          <Ionicons name="trash" size={24} color="#FF3B30" />

        </TouchableOpacity>
        <TouchableOpacity onPress={() => abrirModalActualizar(item)}>
          <Ionicons name="pencil" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    
    <View style={styles.container}>

      {/* Zona del encabezado */}

      <Text style={styles.title}> INSERT & SELECT</Text>
      <Text style={styles.subtitle}>
        {Platform.OS === 'web' ? ' WEB (LocalStorage)' : ` ${Platform.OS.toUpperCase()} (SQLite)`}
      </Text>

      {/* Zona del INSERT */}

      <View style={styles.insertSection}>
        <Text style={styles.sectionTitle}> Insertar Usuario</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Escribe el nombre del usuario"
          value={nombre}
          onChangeText={setNombre}
          editable={!guardando}
        />

        <TouchableOpacity 
          style={[styles.button, guardando && styles.buttonDisabled]} 
          onPress={ handleAgregar}
          disabled={guardando} >

          <Text style={styles.buttonText}>
            {guardando ? ' Guardando...' : 'Agregar Usuario'}
          </Text>

        </TouchableOpacity>

      </View>



      {/* Zona del SELECT */}

      <View style={styles.selectSection}>

        <View style={styles.selectHeader}>

          <Text style={styles.sectionTitle}>Lista de Usuarios</Text>

          <TouchableOpacity 
            style={styles.refreshButton}
            onPress={cargarUsuarios} >
            <Text style={styles.refreshText}>Recargar</Text>
          </TouchableOpacity>

        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#007AFF" />
            <Text style={styles.loadingText}>Cargando usuarios...</Text>
          </View>
           ) : (
          <FlatList
            data={usuarios}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderUsuario}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}> No hay usuarios</Text>
                <Text style={styles.emptySubtext}>Agrega el primero arriba</Text>
              </View>
            }
            contentContainerStyle={usuarios.length === 0 && styles.emptyList}
          />
        )}


      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={cerrarModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Actualizar Usuario</Text>
            <TextInput
              style={styles.input}
              placeholder="Escribe el nuevo nombre del usuario"
              value={nombreEditado}
              onChangeText={setNombreEditado}
              
              
              
            />
            <View style={styles.modalButtons}>
            <TouchableOpacity style= {styles.buttonM}onPress={cerrarModal} >
              <Ionicons name='close-circle' size={24} color="#b85656ff"/>
              <Text style={styles.textM}>CANCELAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.buttonM} onPress={handleActualizar} >
              <Ionicons name='checkmark-circle' size={24} color="#59d355ff"/>
              <Text style={styles.textM}>ACTUALIZAR</Text>
            </TouchableOpacity>
          </View>
            
          </View>
          
        </View>
      </Modal>  


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  insertSection: {
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectSection: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  selectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  refreshButton: {
    padding: 8,
  },
  refreshText: {
    color: '#007AFF',
    fontSize: 14,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  loadingText: {
    marginTop: 10,
    color: '#666',
    fontSize: 14,
  },
  userItem: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  userNumber: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  userNumberText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  userId: {
    fontSize: 12,
    color: '#007AFF',
    marginBottom: 2,
  },
  userDate: {
    fontSize: 12,
    color: '#666',
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#bbb',
  },
  mvcInfo: {
    backgroundColor: '#e3f2fd',
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  mvcTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 8,
  },
  mvcText: {
    fontSize: 12,
    color: '#555',
    lineHeight: 18,
  },
  bold: {
    fontWeight: 'bold',
    color: '#1976D2',
  },

  modalContainer:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    padding: 20,

  },
  modalContent:{
    borderRadius:12,
    backgroundColor: '#d8dadbff',
    padding: 20,
    shadowColor:"#000",
    width: '100%'
  },
  modalTitle:{
   
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 8,
    
  
  },
  modalButtons:{
    flexDirection:'row',
    justifyContent:'space-between',
    gap:10
  },
  buttonM:{
    flexDirection:'row',
    justifyContent:'space-between',
    gap:40,
    backgroundColor: '#f5f5f5',
    borderRadius:10,
    width: '50%',
    justifyContent:'center',
    alignItems:'center',
    padding:7,
    
  },
  textM:{
    flex:1,


  },
   opc:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    gap:15
   }
});