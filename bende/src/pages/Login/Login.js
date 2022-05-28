import React from 'react';
import {SafeAreaView, View, Image, Text, ScrollView} from 'react-native';
import Input from '../../component/Input/Input';
import styles from './Login.style';
import Button from '../../component/Button/Button';
function Login({navigation}) {
  function goToRegister() {
    navigation.navigate('RegisterPage');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.logo_container}>
            <Image
              style={styles.logo}
              source={require('../../asset/benden-logo.png')}
            />
          </View>
          <View style={styles.button_container}>
            <Button ChangeStyle={styles.buttonLogin} ButtonName="Giriş" />
            <Button
              ChangeStyle={styles.buttonRegister}
              ButtonName="Kayıt"
              onPress={goToRegister}
            />
          </View>
          <View style={styles.input_container}>
            <Input placeholder="E-Posta" />
            <Input placeholder="Şifre" isSecure />
          </View>
          <View style={styles.forgetPassword}>
            <Text style={styles.forgetText}>Şifremi Unuttm ?</Text>
          </View>
          <View style={styles.button_main}>
            <Button ChangeStyle={styles.buttonLogin} ButtonName="Giriş Yap" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Login;
