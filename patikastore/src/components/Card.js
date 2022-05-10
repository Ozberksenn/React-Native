import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Card.style';
const Card = ({productInfo}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.card_image} source={{uri: productInfo.imgURL}} />
      <Text style={styles.card_title}>{productInfo.title}</Text>
      <Text style={styles.card_price}>{productInfo.price}</Text>
      <Text style={styles.card_stock}>
        {productInfo.inStock ? ' ' : 'Stokta Yok'}
      </Text>
    </View>
  );
};

export default Card;
