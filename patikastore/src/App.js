import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';
import products from './products.json';
import Card from './components/Card';
function App() {
  const renderItem = ({item}) => <Card productInfo={item} />;
  const key = item => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header_title}>PATIKASTORE</Text>
      </View>
      <FlatList
        ListHeaderComponent={() => (
          <TextInput style={styles.input} placeholder="Ara..." />
        )}
        keyExtractor={key}
        numColumns={2}
        data={products}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1},
  header_title: {
    margin: 10,
    fontSize: 32,
    fontWeight: 'bold',
    color: 'purple',
  },
  input: {
    height: 40,
    margin: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#DCDCDC',
  },
});

export default App;
