import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './Botones/BotonesScreen';
import ScrollViewScreen from './ScrollViewScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';
import BottomSeetScreen from './BottomSeetScreen';
import ImageBackgroundScreen from './ImageBackgroungScreen';
import TextInputScreen from './TextInputScreen';  
import BotonScreen from './Botones/BotonScreen';
import RepasoScreen from './RepasoScreen';




export default function MenuScreen() {
  
    const [screen, setScreen]=useState('menu');

    switch(screen) {
        case 'contador':
            return <ContadorScreen/>
        case'botones':
            return <BotonScreen/>
        case'botonessw':
            return <BotonesScreen/>
        case 'scroll':
            return <ScrollViewScreen />;
        case 'activity':
            return <ActivityIndicatorScreen />; 
        case 'image':
            return <ImageBackgroundScreen />;
        case 'flatlist':
            return <FlatListScreen />;  
        case 'modal':
            return <ModalScreen />;
        case 'bottomsheet':
            return <BottomSeetScreen/>;   
        case 'text':
            return <TextInputScreen />;
        case 'repaso':
            return <RepasoScreen/>;
        

        case 'menu':
            default:
                return (
                    <View style ={styles.container}>
                        <Text style={styles.texto}>Menú de Practicas</Text>
                    
                        <View style={styles.contenedorBotones}>
                            <Button color='#388892ff' onPress={()=>setScreen('contador')} title = 'Pract: Contador'/>
                            <Button color='#388892ff' onPress={()=>setScreen('botonessw')} title = 'Pract: Botones:switch' />
                            <Button color='#388892ff' onPress={()=>setScreen('botones')} title = 'Pract: Botones:botones' />
                            
                            <Button color='#388892ff'onPress={()=>setScreen('text')} title = 'Pract: TextInput'/>
                            <Button color='#388892ff' onPress={()=>setScreen('image')} title = 'Pract: ImageBackgroung' />
                            <Button color='#388892ff' onPress={()=>setScreen('scroll')} title = 'Pract: ScrollView' />
                            <Button color='#388892ff' onPress={()=>setScreen('activity')} title = 'Pract: Activity Indicator' />
                            <Button color='#388892ff' onPress={()=>setScreen('flatlist')} title = 'Pract: FlatList' />
                            <Button color='#388892ff' onPress={()=>setScreen('modal')} title = 'Pract: Modal'/>
                            <Button color='#388892ff' onPress={()=>setScreen('bottomsheet')} title = 'Pract: BottomSeet'/>

                            <Button color='#388892ff' onPress={()=>setScreen('repaso')} title = 'Pract: Repaso 1'/>
                        </View>
                    
                    </View>
                )
    }
    
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a4c7e7ff',
        alignItems: 'center',
        justifyContent: 'center',
        },
    texto:{
    color: '#297fc5ff',
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Courier',
    fontWeight: '400',
    
    },
    contenedorBotones:{
        marginTop: 15,
        flexDirection:'column',
        gap:20,
    },

})