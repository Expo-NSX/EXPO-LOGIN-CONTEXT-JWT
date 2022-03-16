import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../../contexts/auth';

import { styles } from './style';

export default function List(){
    const [user, setUser] = useState([]);

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
            <Text>Usuario: {user.name}</Text>
        </View>
    );
}