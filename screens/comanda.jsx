
import { Image,Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from '../style.js';

export default function Comanda({navigation}) {
    return (
        <View style={styles.containerBetween}>
            <Image style={styles.imagem} source={require('../assets/burguer.jpg')} />
            <View style={styles.header}>
                <View>
                    <Text style={styles.title}>olá, cliente !</Text>
                </View>
            </View>

            <Text style={styles.largeText}>Digite o código da comanda para iniciar um pedido</Text>
            <View>
                <TextInput style={styles.input} placeholder="número da comanda" />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Produtos')}>
                    <Text style={styles.buttonText}>confirmar</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}