import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor: '#FCFBFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerBetween: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#FFF',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 8,
        borderRadius: 4,
        marginTop: 10,
    },
    button: {
        backgroundColor: '#d98a6b',
        color: '#FFF',
        paddingVertical: 8,
        paddingHorizontal: 48,
        borderRadius: 4,
        marginTop: 16,
        marginBottom: 16
    },
    buttonText: {
        color: '#FFF',
    },
    header: {
        width: '20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 50,
        marginTop: 350,
    },
    imagem: {
        width: '100%',
        height: 320,
        position: 'absolute',
        top: 0,
    },
    box: {
        borderColor: '#d98a6b',
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
    },
    pedidos: {
        width: '100%'
    },
    pedidoData: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    pedidoDataTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
    },
    cardProduto: {
        borderColor: '#d98a6b',
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        marginVertical: 5,
    },
    produtoData: {
        flex: 1,
        alignSelf: 'flex-start',
    },
    thumb: {
        width: 200,
        height: 200,
        borderRadius: 4,
    },
    price: {
        color: '#29A035',
        fontSize: 18,
    },
    spinner: {
        flexDirection: 'row',
        backgroundColor: '#D9D9D9',
        borderRadius: 999,
    },
    spinnerMinus: {
        textAlign: 'center',
        backgroundColor: '#E9E9E9',
        borderRadius: 999,
        width: 24,
        height: 24,
        lineHeight: 24,
        fontWeight: 'bold',
    },
    spinnerPlus: {
        textAlign: 'center',
        backgroundColor: '#d98a6b',
        borderRadius: 999,
        width: 24,
        height: 24,
        fontWeight: 'bold',
        lineHeight: 24,
        color: '#FFF',
    },
    spinnerValue: {
        textAlign: 'center',
        width: 24,
        height: 24,
        lineHeight: 24,
    },
    scroll: {
        width: '100%',
    },
    largeText: {
        fontSize: 18,
        marginVertical: 10,
      },

});