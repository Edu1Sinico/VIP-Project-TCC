import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

// Importando a estilização
import styles from '@/app/styles/home/HomeStyle';

// Importando os icones
import Icon from 'react-native-vector-icons/FontAwesome5';

// Importando o Header como componente
import header from '@/components/header/header.tsx'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <header />
    </View>
  );
}