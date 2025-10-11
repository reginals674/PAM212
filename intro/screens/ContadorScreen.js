//import: Zona de declaraciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React, { useState } from 'react';

//2. zona main/principal se levantan compnentes
export default function App() {
  const [contador, setContador]=useState(0);
  return (
    <View style={styles.container}>

      <Text style={styles.texto}>Contador:</Text>
      <Text style={styles.texto2}> {contador} </Text>

      <View style={styles.contenedorBotones}>
        <Button color='#2194a3ff' title="Incrementar" onPress={()=>setContador(contador+1)}/>
        <Button color='#125f69ff' title="Disminuir" onPress={()=>setContador(contador-1)}/>
        <Button color='#0d363bff' title="Reiniciar" onPress={()=>setContador(0)}/>
      </View>

      <StatusBar style="auto" />

    </View>
  );
}
//3.zona de estilos:estetica y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a4c7e7ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: '#211f99ff',
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    fontStyle:'italic',
    textDecorationLine:'line-through'
  },
  texto2:{
    color: '#297fc5ff',
    fontSize: 40,
    fontFamily: 'Courier',
    fontWeight: '400',
    textDecorationLine:'underline'
  },
  contenedorBotones:{
    marginTop: 15,
    flexDirection:'row',
    gap:20,
  },
});
