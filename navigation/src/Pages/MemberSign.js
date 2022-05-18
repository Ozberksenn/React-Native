import React, {useState} from 'react';
import {SafeAreaView, View, Alert} from 'react-native';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

function MemberSign({navigation}) {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userPosta, setUserPosta] = useState(null);
  const [userAddress, setUserAddress] = useState(null);

  function handleSubmit() {
    if (!userName || !userSurname || !userAge || !userPosta || !userAddress) {
      Alert.alert('FITNESS APP', 'Bilgiler Boş Bırakılamaz.');
      return;
    }
    const user = {
      userName,
      userSurname,
      userAge,
      userPosta,
      userAddress,
    };
    console.log(user);

    navigation.navigate('MemberResult', {user});
  }

  return (
    <SafeAreaView>
      <View>
        <Input
          label="Üye Adı"
          placeholder="Üye Adını Girin)iz..."
          onChangeText={setUserName}
        />
        <Input
          label="Üye Soyadı"
          placeholder="Üye Soyadını Giriniz..."
          onChangeText={setUserSurname}
        />
        <Input
          label="Üye Yaşı"
          placeholder="Üye Yaşını Giriniz..."
          onChangeText={setUserAge}
        />
        <Input
          label="Üye E-Posta"
          placeholder="Üye E-Posta Adresini Giriniz..."
          onChangeText={setUserPosta}
        />
        <Input
          label="Üye Adres"
          placeholder="Üye Adresini Giriniz..."
          onChangeText={setUserAddress}
        />
        <Button text="Kaydı Tamamla" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
}

export default MemberSign;
