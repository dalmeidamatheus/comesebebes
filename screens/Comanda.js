import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Button from '../components/button';
import Input from '../components/input';

export default function Comanda({navigation}){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/home.jpg')} />

            <View>
                <Text>Olá,</Text>
                <Text>Matheus !</Text>
            </View>

            <View>
                <Input />
                <Button onPress={() => navigation.navigate('pagi')}>confirmar</Button>
            </View>

            <Text>Digite o código da comanda para iniciar um pedido</Text>

        </View>

    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCFBFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        height: 340,
        width: '100%',
        position: 'absolute',
        top: 0,
        marginBottom: 50
      }
})