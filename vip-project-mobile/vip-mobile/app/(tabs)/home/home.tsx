import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

// Importando a estilização
import styles from '@/app/styles/home/HomeStyle';

// Importando o Header como componente
import Header from '@/components/header/Header';

export default function HomeScreen() {

  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.user_section}>
        <Text style={styles.text_title}>Bem-vindo(a), Usuário!</Text>
      </View>

      {/* Seção de saldo disponível */}
      <View style={styles.balanceSection}>
        <View style={styles.balanceIconSection}>
          <Icon name="dollar" size={50} />
        </View>
        <View style={styles.balanceTextSection}>
          <Text style={styles.balanceTitle}>Saldo Disponível</Text>
          <Text style={styles.balanceValue}>R$ 0,00</Text>
        </View>
      </View>

      {/* Seção principal */}
      <View style={styles.mainSection}>

        {/* Seção do Topo */}

        {/* Barra de pesquisa */}
        <View style={styles.mainTopSection}>
          <View style={styles.inputSection}>
            <View style={styles.iconInputSection}>
              <Icon name="search" size={20} color="#fff" />
            </View>
            <TextInput
              style={[styles.input]}
              placeholder="Pesquisar"
              placeholderTextColor={'#C7C7C7'}
              value={search}
              onChangeText={setSearch}
              underlineColorAndroid="transparent"
            />
          </View>
        </View>

        {/* Seção de baixo */}
        <View style={styles.mainBottomSection}>

          <View style={styles.divisorBar}></View>

          <View style={styles.buttonSection}>
            <View style={styles.buttonTopSection}>
              <TouchableOpacity style={styles.iconButton}>
                <Icon name="bus" size={50} color={'#fff'}></Icon>
                <Text style={styles.textIcon}>Linhas</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconButton}>
                <Icon name="money" size={50} color={'#fff'}></Icon>
                <Text style={styles.textIcon}>Saldo</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconButton}>
                <Icon name="map-marker" size={50} color={'#fff'}></Icon>
                <Text style={styles.textIcon}>Rotas</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonBottomSection}>
            <TouchableOpacity style={styles.iconButton}>
                <Icon name="star-o" size={50} color={'#fff'}></Icon>
                <Text style={styles.textIcon}>Favoritos</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconButton}>
                <Icon name="question" size={50} color={'#fff'}></Icon>
                <Text style={styles.textIcon}>Ajuda</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconButton}>
                <Icon name="user-circle" size={50} color={'#fff'}></Icon>
                <Text style={styles.textIcon}>Conta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </View>
    </View>
  );
}