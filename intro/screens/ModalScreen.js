import React, {useState} from "react";
import { Modal,Text, StyleSheet, View, Button } from 'react-native'

export default function modalscreen(){
  const [modalVisible,setModalVisible] = useState(false);

  const abrirModal=()=>{
    setModalVisible(true);
  };

  const cerrarModal= ()=>{
    setModalVisible(false);
  };

  return(
    <View style= {styles.container}>
      <Text style={styles.tittle}>Ejemplo del compoonenete Modal</Text>

      <Button title="Abrir modal" onPress={abrirModal}/>

      <Modal 
      animationType="fade" 
      transparent= {true} 
      visible={modalVisible} 
      onRequestClose={cerrarModal}>
         <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Hola Modal
              </Text>
              <Button title="Cerrar Modal" onPress ={cerrarModal}></Button>
            </View>
         </View>

      </Modal>
    </View>
  )

}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c0dae1ff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(162, 205, 212, 0.4)',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#79a7f2ff',
    borderRadius: 15,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#045f5fff',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    fontSize:16,

  },
  

});