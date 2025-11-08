
import React, {useEffect, useRef,useState}from 'react';
import { StyleSheet, Text, View, ScrollView, Switch,Alert} from 'react-native';
import { Button } from 'react-native-web';



export default function scrollArticulos(){

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => { setIsEnabled(previousState => !previousState)

      Alert.alert('atencion', '');
      alert('Error: Por favor complete todos los campos, falta nombre',
        [
          
        ]
      );
    };

   
  return(
      <View >
        <View style = {styles.header}>
        <Text style= {styles.text}>Blog de Noticias</Text>
      </View>
        <ScrollView>
         
          <Text style ={styles.tittle}>TECNOLOGÍA</Text>

          <View style = {styles.Tarjeta}>
            
            <Text>World of Warcraft anuncia una moneda virtual para comprar artículos con los que decorar los hogares</Text>
            <Text>10/08/25</Text>
            <Text >Blizzard ha anunciado la introducción de una nueva moneda virtual en World of Warcraft,
            Hearthsteel es el nombre de la moneda virtual que podrá adquirirse con dinero real y que permitirá a los jugadores de World of Warcraft comprar elementos decorativos para personalizar los hogares.</Text>

            <Button  title="leer mas.."  />
            
          </View>
           <View style = {styles.Tarjeta}>
            
            <Text>World of Warcraft anuncia una moneda virtual para comprar artículos con los que decorar los hogares</Text>
            <Text>10/08/25</Text>
            <Text>Blizzard ha anunciado la introducción de una nueva moneda virtual en World of Warcraft,
            Hearthsteel es el nombre de la moneda virtual que podrá adquirirse con dinero real y que permitirá a los jugadores de World of Warcraft comprar elementos decorativos para personalizar los hogares.</Text>

           <Switch
            trackColor={{ false: "#757775ff", true: "#74a1c5ff" }}
            thumbColor={isEnabled ? "#97ca97ff" : "#f4f3f4ff"}
            
            onValueChange={toggleSwitch}
            value={isEnabled}
            
          />
            
          </View>

        </ScrollView>
      </View>
    );

};


const styles = StyleSheet.create({

  header:{
    
    height: 120,
    backgroundColor: '#181D31',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,

  },
   Tarjeta:{
    
    backgroundColor: '#6d82d7ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBlock: 40,
    paddingLeft:55,
    paddingRight:55,
    paddingBottom:55,
    paddingEnd:55,

   },
  text:{
    color: "#fff",
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
  },

  tittle:{
    color: "#000",
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
  },


});
