import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './Input.styles';
function Input({label, placeholder, onChangeText}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View>
        <TextInput
          style={styles.input_container}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
}

export default Input;
