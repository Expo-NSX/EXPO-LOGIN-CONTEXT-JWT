
import React, { createContext, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext({});

export default function AuthProvider({ children }){
    const [data, setData]     = useState([]);

    const navigation = useNavigation();

    async function Logar(usuario, senha){
        if(usuario != '' && senha != ''){
            const result = await fetch('http://192.168.100.12:3333/api/auth/signin',{
                method: 'POST',                    
                headers: { 
                    "Content-Type": "application/json" 
                },
                body: JSON.stringify({
                    username: usuario,
                    password: senha
                })
            });
            const response = await result.json();
            setData(response);
            if(response.email != undefined){
                navigation.navigate('Home');
            }else{
                alert('Usuario ou senha inválido');
            }
        }
    }

    return(
        <AuthContext.Provider value={{ Logar, data }} >
            {children}
        </AuthContext.Provider>
    );
}