
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    containerHeader:{
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 95
    },
    title:{
        color: '#FFFFFF',
        fontSize: 36,
        fontWeight: 'bold'
    },
    containerForm:{
        flex: 2,
        padding: '10%'
    },
    label:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    input:{
        borderBottomWidth: 1,
        padding: 3,
        fontSize: 20,
        marginBottom: 20
    },
    button:{
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton:{
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20
    }
});