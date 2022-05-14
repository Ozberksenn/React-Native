import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './Searchbar.styles';
function SearchBar(props) {
  return (
    <View>
      <TextInput
        style={styles.container}
        placeholder="ara"
        onChangeText={props.onSearch} // onChangeText ekrana yazdığımız her şeyi not eder.
      />
    </View>
  );
}

export default SearchBar;
