// src/screens/HomeScreen.js
import React = require('react');
import { View, Text } from 'react-native';

// Importando a estilização
import styles from '@/app/styles/home/HomeStyle';

// Importando o Header como componente
import Header from '@/components/header/Header';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.user_section}>
        <Text style={styles.text_title}>Bem-vindo(a), Usuário!</Text>
      </View>

      {/* Seção principal */}
      <View >

      </View>
    </View>
  );
}