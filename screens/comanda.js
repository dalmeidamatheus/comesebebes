import Button from "../components/button";
import Input from "../components/input";

export default function Comanda() {
    return ( 
        <View>
            <View>
                <Text> Olá, </Text> 
                <Text> Matheus </Text> 
            </View>

            <View>
                <Input />
                <Button>confirmar</Button>
            </View>
        </View>

        <Text>Digite o código da comanda para iniciar um pedido</Text>
    )
}