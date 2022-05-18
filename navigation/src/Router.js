import React from 'react';
import {NavigationContainer} from '@react-navigation/native'; // benim sayfaalr arası geçiş yapmamı sağlayan yegane yapı. Çok önemli bir yapı. hangi sayfa da olduğumuz bilgisini hafızada tutar. Bu olmazsa bizim navigasyon yapımız oluşmaz.
import {createNativeStackNavigator} from '@react-navigation/native-stack'; // bu yapı ise sayfalar arası geçiş yapmamızı sağlar.
import Welcome from './Pages/Welcome';
import MemberSign from './Pages/MemberSign';
import MemberResult from './Pages/MemberResult';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // tüm sayfalarda ki title alanını kaldırmak için <Stack.Navigator alanını screenoptions fonksiyonu tanımlanır ve headerShown false verilir.
        }}>
        <Stack.Screen
          name="WelcomeScreen"
          component={Welcome}
          /* options={{
            headerShown: false,  en üstte ki başlık kısmı kapatılır. headerShown boolean değeri defaul olarak true gelir onu false yaparız.
          }} */
        />
        <Stack.Screen name="MemberSign" component={MemberSign} />
        <Stack.Screen name="MemberResult" component={MemberResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
