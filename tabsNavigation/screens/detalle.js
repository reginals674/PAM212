import { View, Text, StyleSheet, Button} from 'react-native';

export default function Detalle({ navigation }) {

    
    
    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>Detalles de Usuario</Text>
            <Button title='regresar' 
            onPress={()=>navigation.goBack()}></Button>
            
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    iconRow: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'red',
    },
});