import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Start from './pages/Start/Start';
const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StartPage"
          component={Start}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginPage"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RegisterPage"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
