import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './MealsCard.style';
function MealsCard({meals, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: meals.strMealThumb}} />
        <View style={styles.text_container}>
          <Text style={styles.text}>{meals.strMeal}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default MealsCard;
