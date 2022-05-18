import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
function MemberResult({route}) {
  const {user} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.info}>Kullanıcı Adı : {user.userName}</Text>
      <Text style={styles.info}>Kullanıcı Soyadı : {user.userSurname} </Text>
      <Text style={styles.info}>Kullanıcı Yaş : {user.userAge}</Text>
      <Text style={styles.info}>Kullanıcı E-Posta : {user.userPosta}</Text>
      <Text style={styles.info}>Kullanıcı Adres : {user.userAddress}</Text>
      <Text style={styles.completed}>Kaydınız başarıyla tamamlanmıştır...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 10,
  },
  info: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  completed: {
    fontSize: 24,
    color: 'green',
  },
});

export default MemberResult;
