import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Config from 'react-native-config';
import ProductCard from '../../component/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../component/Loading/Loading';
function Product({navigation}) {
  const {loading, data, error} = useFetch(Config.API_URL);

  function handleSelect(id) {
    navigation.navigate('DetailPage', {id});
  }

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View>
      <FlatList data={data} renderItem={renderProduct} />
    </View>
  );
}

export default Product;
