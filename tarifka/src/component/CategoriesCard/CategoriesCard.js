import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './CategoriesCard.style';
function CategoriesCard({categories, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.body_container}>
          <Image
            style={styles.image}
            source={{uri: categories.strCategoryThumb}}
          />
        </View>
        <View style={styles.title_container}>
          <Text style={styles.title}>{categories.strCategory}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CategoriesCard;
