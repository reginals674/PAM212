import React from 'react';
import { StyleSheet, Text, View, ScrollView, Switch,useState } from 'react-native';

const [isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);


const Header = () => {
    return(
      <View style = {styles.header}>
        <Text>Articulos</Text>
      </View>
    );
};

export default function scrollArticulos(){
  return(
      <View >
        <Header/>
        <ScrollView>
         

          <View style = {styles.Tarjeta}>
            <Text>NOMBRE ART.</Text>
            <Text>fecha</Text>
            <Text>resumen</Text>
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
    paddingTop: 25,

   }


});
