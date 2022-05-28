import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './Button.style';
function Button({ButtonName, onPress, ChangeStyle}) {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <Text style={ChangeStyle}>{ButtonName}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Button;
