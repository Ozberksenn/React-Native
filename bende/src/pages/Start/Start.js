import React, {useEffect} from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import styles from './Start.style';
function Start({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginPage');
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={require('../../asset/benden_text.png')}
        />
      </View>
    </SafeAreaView>
  );
}

export default Start;
