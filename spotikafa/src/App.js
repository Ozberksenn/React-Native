import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import music_data from './music-data.json';
import SongCard from './components/SongCard/SongCard';
import SearchBar from './components/SearchBar/SearchBar';
function App() {
  const [list, setList] = useState(music_data);

  const renderSong = ({item}) => <SongCard song={item} />;
  const renderSeperator = () => <View style={styles.seperator} />;
  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png',
          }}
        />
        <View style={styles.logo_title_container}>
          <Text style={styles.logo_title}>SPOTİFY</Text>
        </View>
      </View>
      <SearchBar onSearch={handleSearch} />

      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator} //bu componente ne verirsek her birinin arasına ekler.
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  title: {
    fontSize: 36,
    color: 'green',
    textAlign: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logo_container: {
    margin: 10,
    flexDirection: 'row',
  },
  logo_title: {
    color: '#52f67e',
    fontSize: 48,
    fontFamily: 'sans-serif',
  },
  logo_title_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
