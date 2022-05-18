import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import Button from '../components/Button/Button';

function Welcome({navigation}) {
  function goToMemberSign() {
    navigation.navigate('MemberSign');
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>FITNESS APP </Text>
        <Button text="Üye Kaydı Oluştur" onPress={goToMemberSign} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Welcome;
