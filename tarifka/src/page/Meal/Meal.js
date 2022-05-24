import React from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch/useFetch';
import MealsCard from '../../component/MealsCard/MealsCard';
import Loading from '../../component/Loading/Loading';
import styles from './Meal.style';
function Meal({route, navigation}) {
  const {strCategory} = route.params;
  const {loading, data} = useFetch(`${Config.API_URL_MEAL}${strCategory}`);
  if (loading) {
    return <Loading />;
  }

  function handleSelect(idMeal) {
    navigation.navigate('DetailPage', {idMeal});
  }
  const renderMeal = ({item}) => (
    <MealsCard meals={item} onSelect={() => handleSelect(item.idMeal)} />
  );
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList data={data.meals} renderItem={renderMeal} />
      </View>
    </SafeAreaView>
  );
}

export default Meal;
