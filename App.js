

import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import Contact from './components/Contact';
import DetailKontak from './components/Detail1';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard Home " component={Home} />
        <Stack.Screen name="Halaman Kontak" component={Contact} />
         <Stack.Screen
          name="DetailKontak"
          component={DetailKontak}
          options={({ route }) => ({ title: route.params.data.nama })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
