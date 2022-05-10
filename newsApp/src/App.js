import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
//FlatList Componenti kullanıcının ne kadar veri görmesi gerekiyorsa o kadar veriyi gösteren bir componenttir. Bilgisayarı yormaz. Oldukça kullanışlı. Örneğin instagramda en üst tarafta ki bir image görüp alt tarafa scrool yaptıktan sonra üst tarafta ki imageye tekrar bakmayacağımız için FlatList sayesinde artık onu kaldırırız.
import NewsCard from './components/NewsCard';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';
function App() {
  const renderItem = ({item}) => <NewsCard news={item} />;
  const keyExtractor = item => item.u_id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header_text}>NEWS</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map(bannerNews => (
              <Image
                style={styles.banner_image}
                source={{uri: bannerNews.imageUrl}}
              />
            ))}
          </ScrollView>
        )}
        keyExtractor={keyExtractor}
        data={news_data}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  header_text: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'black',
  },
});

export default App;
