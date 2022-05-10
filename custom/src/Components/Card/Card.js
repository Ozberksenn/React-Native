import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './Card.style';
function Card(props) {
  return (
    <View style={styles.Container}>
      <View style={styles.body}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          Alert.alert('Merhaba ' + props.title);
        }}
        style={styles.button_container}>
        {/* TouchableOpacity componenti buton için kullanılan bir componenttir.Opaklık efecti veren bir view yapısı sunar. içine eklediğimiz şeylre tıklayabiliriz. */}
        <Text style={styles.button_title}>I LIKED</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Card;
