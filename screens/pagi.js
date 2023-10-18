import { StyleSheet, Text, View, Image } from "react-native";

export default function pagi(){
    return(
        <View style={styles.container}>
            <Image style={styles.image1} source={require('../assets/home.jpg')} />

            <View>
                <Text>Bem vindo!</Text>
                <Text>Pronto para iniciar seu pedido?</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/thai.jpg')} />
                <Image style={styles.image} source={require('../assets/pizza.jpg')} />
                <Image style={styles.image} source={require('../assets/sobremesa.jpg')} />

            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCFBFF',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    imageContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
    },
    image1: {
      height: 340,
      width: '100%',
      position: 'absolute',
      top: 0,
      marginBottom: 50,
    },
    image: {
      height: 200, 
      width: '34%', 
      margin: 1,
    },
  });