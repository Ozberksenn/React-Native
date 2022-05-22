import React from 'react';
import {View, Text, Image} from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';
import styles from './Detail.style';
import Loading from '../../component/Loading/Loading';
function Detail({route}) {
  const {id} = route.params;
  const {loading, error, data} = useFetch(`${Config.API_URL}/${id}`);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.body_container}>
        <Image style={styles.image} source={{uri: data.image}} />
      </View>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.description}>{data.description}</Text>
      <Text style={styles.price}>{data.price} TL</Text>
    </View>
  );
}

export default Detail;
