import React, {useEffect, useRef,useState}from 'react';
import {View, Switch,Text,TextInput,Alert,Button,StyleSheet,Animated, Dimensions,ImageBackground, } from 'react-native';
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const { height } = Dimensions.get("window");

export default function repasoScreen(){

    // Estado para controlar la visualización de la pantalla principal

  const [showMain, setShowMain] = useState(false); 
    
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    
    // Animaciones Splash
    const fadeLogo = useRef(new Animated.Value(0)).current;
    const scaleLogo = useRef(new Animated.Value(0.5)).current;
    const rotateLogo = useRef(new Animated.Value(0)).current;  
    const fadeOut = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        // Animación inicial del logo: fade + scale + rotación
        Animated.parallel([
          Animated.timing(fadeLogo, {
            toValue: 1,
            duration: 1200,
            useNativeDriver: false,
          }),
          Animated.spring(scaleLogo, {
            toValue: 1,
            friction: 5,
            useNativeDriver: false,
          }),
          Animated.timing(rotateLogo, {
            toValue: 1,
            duration: 1200,
            useNativeDriver: false,
          }),
        ]).start();
    
   
        // Después de 3s, fade-out del Splash y mostrar contenido principal
        const timer = setTimeout(async () => {
          Animated.timing(fadeOut, {
            toValue: 0,
            duration: 800,
            useNativeDriver: false,
          }).start(async () => {
            await SplashScreen.hideAsync(); // oculta splash de Expo
            setShowMain(true); // muestra contenido principal
          });
        }, 5000);
    
        return () => clearTimeout(timer);
      }, []);
    
      const rotateInterpolate = rotateLogo.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "10deg"],
      });

        
          
  

    const enviarDatos = () => {

     
     
        if (nombre.trim() === '') {
          Alert.alert('Error', 'Por favor complete todos los campos, falta nombre');
          alert('Error: Por favor complete todos los campos, falta nombre');
          
    
        } else if(correo.trim()=== ''){
            Alert.alert('Error', 'Debe aceptar los términos y condiciones, falta correo');
            alert('Error', 'Debe aceptar los términos y condiciones, falta correo');
            
         } else if(isEnabled ==false){
            Alert.alert('Error', 'Debe aceptar los términos y condiciones');
            alert('Error: Debe aceptar los términos y condiciones');
            

        }else if (correo.indexOf('@')===-1){
          Alert.alert('Error', 'Por favor ingrese un correo electrónico válido');
          alert('Error: Por favor ingrese un correo electrónico válido');
          
          
        }else{
          Alert.alert('¡Éxito!', 'Datos enviados correctamente');
          alert('¡Éxito! Datos enviados correctamente');
          
        }
    };


    if (showMain) {
    return (

      <ImageBackground
        source={require("../assets/fondo.jpeg")}
        style={styles.background}
        resizeMode="cover" // 'cover' hace que la imagen llene toda la pantalla
      >
      
      <View style={styles.container}>
      <Text style={styles.title}>Registro de usuario</Text>
      <TextInput
            style={styles.input}
            placeholder="Nombre Completo"
            value={nombre}
            onChangeText={setNombre}
      />
          <TextInput
            style={styles.input}
            placeholder="Correo Electrónico"
            value={correo}
            onChangeText={setCorreo}
            keyboardType='email-address'
          />

          <Text> Acepto los términos y condiciones </Text>

          <Switch
            trackColor={{ false: "#757775ff", true: "#74a1c5ff" }}
            thumbColor={isEnabled ? "#97ca97ff" : "#f4f3f4ff"}
            
            onValueChange={toggleSwitch}
            value={isEnabled}
          />

          <Button style={[styles.text] } title="Enviar" onPress={enviarDatos} />
          
          
        </View>
    
        </ImageBackground>
      );
    }

    return (
        <Animated.View style={[styles.containerSplash, { opacity: fadeOut }]}>
          <Animated.Image
            source={require("../assets/foca.png")}
            resizeMode="contain"
            style={[
              styles.logoImage,
              {
                opacity: fadeLogo,
                transform: [{ scale: scaleLogo }, { rotate: rotateInterpolate }],
              },
            ]}
          />
          
        </Animated.View>
      );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding:20,
    gap:10
  },
  containerSplash: {
    flex: 1,
    backgroundColor: "#007bffff",
    justifyContent: "center",
    alignItems: "center"
  },
  
  logoImage: {
    width: 300,
    height: 300,
    marginBottom: 5,
    
  },
  background: {
    flex: 1, // ocupa toda la pantalla
    width: "100%", // ancho completo
    height: "100%", // alto completo
    justifyContent: "center",
    alignItems: "center",
    

  },
  
  text: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
  },
 
  title:{
    fontSize:25,
    fontWeight:'bold',
    color:'#c0f6ffff'
  },
  input:{
    width:'80%',
    borderWidth:3,
    borderColor:'#c0f6ffff',
    padding:12,
    borderRadius:9,
    fontColor:'#ffffff'
  },
  
});

