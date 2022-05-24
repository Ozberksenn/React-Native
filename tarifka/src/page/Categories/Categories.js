import React from 'react';
import {View, FlatList} from 'react-native';
import Config from 'react-native-config';
import CategoriesCard from '../../component/CategoriesCard/CategoriesCard';
import Loading from '../../component/Loading/Loading';
import useFetch from '../../hooks/useFetch/useFetch';
import styles from './Categories.style';
function Categories({navigation}) {
  const {loading, data} = useFetch(Config.API_URL);
  if (loading === true) {
    return <Loading />;
  }
  function handleSelect(strCategory) {
    navigation.navigate('MealPage', {strCategory});
  }

  const renderCategories = ({item}) => (
    <CategoriesCard
      categories={item}
      onSelect={() => handleSelect(item.strCategory)}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCategories} />
    </View>
  );
}

export default Categories;
