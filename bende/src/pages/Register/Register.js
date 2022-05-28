import React from 'react';
import {SafeAreaView, View, Image, ScrollView} from 'react-native';
import Input from '../../component/Input/Input';
import Button from '../../component/Button/Button';
import styles from './Register.style';
function Register({navigation}) {
  function goToLogin() {
    navigation.navigate('LoginPage');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.logo_container}>
          <Image
            style={styles.logo}
            source={require('../../asset/benden-logo.png')}
          />
        </View>
        <View style={styles.button_container}>
          <Button
            ChangeStyle={styles.buttonRegister}
            ButtonName="Giriş"
            onPress={goToLogin}
          />
          <Button ChangeStyle={styles.buttonLogin} ButtonName="Kayıt" />
        </View>
        <View style={styles.input_container}>
          <Input placeholder="Ad" />
          <Input placeholder="Cinsiyet" />
          <Input placeholder="E-Posta" />
          <Input placeholder="Şifre" isSecure />
        </View>
        <View style={styles.button_main}>
          <Button ChangeStyle={styles.buttonLogin} ButtonName="Kayıt Ol" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Register;
