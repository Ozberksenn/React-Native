import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Card from './Components/Card';
function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card title="Serbest" text="Ben başka ilde miyim ? " />
      <Card
        title="Arif Işık"
        text="Uzaylılar Tarafından Kaçırıldım. Evet tarafından."
      />
      <Card title="Fikri" text="Peki Zeki Müren de bize görecek mi ?" />
      <Card
        title="Yılmaz"
        text="Ben senin yılgın bir hoşgörüyle beni benimsemene mi kaldım."
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});

export default App;
