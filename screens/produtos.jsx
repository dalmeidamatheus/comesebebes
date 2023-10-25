import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';

import { styles } from '../style.js';
import CardProduto from '../components/card.js';

const produto = {
    "id": 1,
    "nome": "niguiri",
    "imagePath": "https://plus.unsplash.com/premium_photo-1674062989120-4ccc0eb35be0?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29taWRhJTIwamFwb25lc2F8ZW58MHx8MHx8fDA%3D",
    "preco": 8
}

export default function Produtos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/produtos")
          .then(resp => setProdutos(resp.data))
    }, []);

    const produtosComProdutoEspecificado = [produto, ...produtos];

    return (
        <View style={styles.containerBetween}>

                <View style={styles.box}>
                    <Text>número da comanda</Text>
                    <Text style={styles.title}>87560</Text>
                </View>


            <View style={styles.pedidos}>
                <Text style={styles.subtitle}>Pedido</Text>
                <View style={styles.pedidoData}>
                    <Text>Saldo da comanda</Text>
                    <Text>R$ 16,00</Text>
                </View>
                <View style={styles.pedidoData}>
                    <Text>Total do pedido</Text>
                    <Text>R$ 16,00</Text>
                </View>
                <View style={styles.pedidoDataTotal}>
                    <Text>Saldo final</Text>
                    <Text>R$ 16,00</Text>
                </View>
            </View>

            <TextInput style={styles.input} placeholder="procurar" />

            <Text style={styles.subtitle}>Produtos</Text>

            <ScrollView style={styles.scroll}>
                {produtosComProdutoEspecificado.map(p => <CardProduto key={p.id} produto={p} /> )}
            </ScrollView>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>finalizar</Text>
            </TouchableOpacity>
        </View>
    )
}
