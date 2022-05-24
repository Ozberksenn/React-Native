import React from 'react';
import {View, Text, Image, Button, Linking} from 'react-native';
import styles from './DetailsCard.style';
function DetailsCard({details}) {
  return (
    <View>
      <Image style={styles.image} source={{uri: details.strMealThumb}} />
      <View>
        <Text style={styles.title}>{details.strMeal}</Text>
        <View style={styles.line}></View>
        <Text style={styles.description}>{details.strInstructions}</Text>
        <Button
          title="Watch On Youtube"
          color="#ff0000"
          onPress={() => Linking.openURL(details.strYoutube)}
        />
        <View style={styles.space}></View>
      </View>
    </View>
  );
}

export default DetailsCard;
