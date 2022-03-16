
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './style';
import { AuthContext } from '../../contexts/auth';

import * as Animatable from 'react-native-animatable';

export default function SignIn(){
    const [user, setUser]         = useState('');
    const [password, setPassword] = useState('');

    const { Logar  } = useContext(AuthContext);   

    function handleSignIn(){
        if(user != '' && password != ''){
            Logar(user, password);
        }else{
            alert('preencha todos os campos');
        }
    }

    return(
        <View style={styles.container}>
            <Animatable.View style={styles.containerHeader} animation="fadeInDown" delay={300}>
                <Text style={styles.title}>SignIn</Text>
            </Animatable.View>
            <View style={styles.containerForm}>
                <Text style={styles.label}>Usuario</Text>
                <TextInput
                    placeholder='Informe o nome de usuario'
                    style={styles.input}
                    onChangeText={ value => setUser(value) }
                    value={ user }
                />
                <Text style={styles.label}>Senha</Text>
                <TextInput
                    placeholder='Insira a sua senha'
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={ value => setPassword(value) }
                    value={ password }
                />
                <TouchableOpacity style={styles.button} onPress={handleSignIn} >
                    <Text style={styles.textButton} >SignIn</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}