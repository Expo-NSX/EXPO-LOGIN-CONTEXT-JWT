
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import SignIn from '../src/screens/SignIn';
import Home from '../src/screens/Home';
import List from '../src/screens/List';

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name='Home'   component={Home}   />
            <Stack.Screen name='List'   component={List}   />
        </Stack.Navigator>
    );
}