import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './page/Categories/Categories';
import Meal from './page/Meal/Meal';
import Detail from './page/Detail/Detail';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriesPage"
          component={Categories}
          options={{
            title: 'Categories',
            headerTitleStyle: {color: '#ffa500'},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="MealPage"
          component={Meal}
          options={{
            title: 'Meal',
            headerTitleStyle: {color: '#ffa500'},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: 'Detail',
            headerTitleStyle: {color: '#ffa500'},
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
