//import: Zona de declaraciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React, { useState } from 'react';

//2. zona main/principal se levantan compnentes
export default function App() {
  const [contador, setContador]=useState(0);
  return (
    <View style={styles.container}>

      <Text>Contador: {contador}</Text>
      <Button title="Incrementar" onPress={()=>setContador(contador+1)}/>
      <Button title="Disminuir" onPress={()=>setContador(contador-1)}/>
      <Button title="Iniciar" onPress={()=>setContador(0)}/>

      <StatusBar style="auto" />

    </View>
  );
}
//3.zona de estilos:estetica y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
