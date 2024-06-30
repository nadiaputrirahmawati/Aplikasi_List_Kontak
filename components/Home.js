import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const Home = ({ navigation }) => {
  return (
    <View style={style.container}>
      <TouchableOpacity 
        style={style.kontak} 
        onPress={() => navigation.navigate('Halaman Kontak')}>
        <Text style={style.kontakText}><Icon name="call" size={24} color="black" /> Buka Kontak</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Home;

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  kontak: {
    padding: 20,
    backgroundColor: 'pink',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  kontakText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  }
});
