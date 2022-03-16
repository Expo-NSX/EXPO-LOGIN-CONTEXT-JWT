import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './style';

import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';

export default function Home(){
    const [user, setUser] = useState([]);
    const navigation = useNavigation();

    function handleList(){
        navigation.navigate('List');
    }

    const { data } = useContext(AuthContext);

    useEffect(() => {
        (async() => {
            const result = await fetch('http://192.168.100.12:3333/api/test/user', {
                headers: {
                    'X-Access-Token': `${data.accessToken}`
                }
            });
            const response = await result.json();
            setUser(response); 
        })(); 
    }, []);

    return(
        <View style={styles.container}>
            <Text>BEM-VINDO {user.name}</Text>
            <TouchableOpacity style={styles.button} onPress={handleList}>
                <Text style={styles.textButton}>List</Text>
            </TouchableOpacity>
        </View>
    );
}