import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Input.style';
function Input({placeholder, isSecure}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#98A5C9"
        secureTextEntry={isSecure}
      />
    </View>
  );
}

export default Input;
