
import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

import AuthProvider from './src/contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle='default' backgroundColor={'blue'} /> 
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}