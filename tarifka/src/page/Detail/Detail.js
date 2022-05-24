import React from 'react';
import {View, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';
import DetailsCard from '../../component/DetailsCard/DetailsCard';
import Loading from '../../component/Loading/Loading';
import styles from './Detail.style';
function Detail({route}) {
  const {idMeal} = route.params;
  const {loading, data} = useFetch(`${Config.API_URL_DETAIL}${idMeal}`);
  if (loading) {
    return <Loading />;
  }
  const renderDetail = ({item}) => <DetailsCard details={item} />;
  return (
    <View>
      <FlatList data={data.meals} renderItem={renderDetail} />
    </View>
  );
}

export default Detail;
