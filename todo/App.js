import React, {useState} from 'react';
import {
  StatusBar,
  TextInput,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './App.styles';
function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState('');

  const handleAddList = () => {
    setList([...list, task]);
    setTask('');
  };
  const handleDelete = index => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };
  const renderItem = () => <View style={styles.renderItem}></View>;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>YAPILACAKLAR</Text>
      <FlatList
        style={styles.list_container}
        data={list}
        renderItem={({item, index}) => (
          <View style={styles.list_text_container}>
            <Text style={styles.list_text}>{item}</Text>
            <TouchableOpacity
              onPress={() => handleDelete(index)}
              style={styles.list_delete_container}>
              <Text style={styles.list_delete_text}>X</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item + Date.now() + Math.random()}
        ItemSeparatorComponent={renderItem}
      />
      <Text style={styles.list_length}>Yapılacak İşler : {list.length}</Text>

      <View style={styles.footer}>
        <TextInput
          placeholder="Yapılacak..."
          onChangeText={setTask}
          value={task}
          style={styles.textBar_container}
        />

        <TouchableOpacity
          style={styles.button_container}
          onPress={handleAddList}>
          <Text style={styles.button_text}>Ekle</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
export default App;
