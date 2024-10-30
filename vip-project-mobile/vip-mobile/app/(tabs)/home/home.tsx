<<<<<<< HEAD
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
=======
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#166CE2',
    },

    user_section: {
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    text_title: {
        fontSize: 20,
        fontWeight: 'light',
        color: '#fff',
    },
});
>>>>>>> fbddba02b4bfa702cae4dee5f1d673b497d640dc
