import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Button from './components/button';
import Input from './components/input';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/home.jpg')} />
      <Text style={styles.title}>comes&bebes</Text>

      <Input placeholder='e-mail'/>
      <Input placeholder='senha' secureTextEntry/>

      <Button>entrar</Button>
      
      <TouchableOpacity>
        <Text>criar conta</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFBFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 900
  },
  title: {
    color: '#d98a6b',
    fontSize: 34,
    fontWeight: 'bold',
    top: 20,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFF',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
    marginTop: 40,
    top: 30,
  }, 
  button:{
    backgroundColor: '#d98a6b',
    color: '#FFF',
    paddingVertical: 8,
    paddingHorizontal: 48,
    borderRadius: 4,
    marginTop: 16,
    marginBottom: 16
  },
  image: {
    height: 340,
    width: '100%',
    position: 'absolute',
    top: 0,
    marginBottom: 50
  }
});
