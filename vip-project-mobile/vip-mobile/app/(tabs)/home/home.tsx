import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useLinkTo, useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome5';

// Importando a estilização
import styles from '@/app/styles/home/HomeStyle';

// Importando o Header como componente
import Header from '@/components/header/header';


export default function HomeScreen() {

  // useState
  const [search, setSearch] = useState('');
  const [showBalance, setShowBalance] = useState(true); // Cria um useState booleano para a mudança de estado da visibilidade do saldo
  const [userName, setUserName] = useState('Usuário');

  const background = require('@/assets/images/background/background.png');

  const linkTo = useLinkTo(); // Sistema de links do react navigator

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        style={styles.banner} // Use o estilo ajustado
      >
        <Header backgroundActive={false} />

        <View style={styles.user_section}>
          <Text style={styles.text_title}>Bem-vindo(a), {userName}!</Text>
        </View>

        {/* Seção de saldo disponível */}
        <View style={styles.balanceSection}>
          <View style={styles.balanceIconSection}>
            <Text style={styles.balanceDollarIcon}>$</Text>
          </View>
          <View style={styles.balanceTextSection}>
            <Text style={styles.balanceTitle}>Saldo Disponível</Text>
            <Text style={styles.balanceValue}>{showBalance ? 'R$ ●●●●' : 'R$ 0,00'} </Text>  {/* Realiza a troca do valor conforme criacado no botão */}
          </View>
          <View style={styles.visibleButtonSection}>
            <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
              <Icon
                name={showBalance ? 'eye' : 'eye-slash'} // Alterna o ícone com base no estado
                size={20}
                color="#166CE2"
              />
            </TouchableOpacity>
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
                <TouchableOpacity
                  style={styles.bigIconButton}
                  onPress={() => linkTo('/Saldo')}
                >
                  <Icon name="money-bill" size={70} color={'#fff'}></Icon>
                  <Text style={styles.bigTextIcon}>Saldo</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.bigIconButton}
                // onPress={() => linkTo('/Linhas')}
                >
                  <Icon name="bus" size={70} color={'#fff'}></Icon>
                  <Text style={styles.bigTextIcon}>Linhas</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.buttonBottomSection}>
                <TouchableOpacity style={styles.iconButton}>
                  <Icon name="star" size={50} color={'#fff'}></Icon>
                  <Text style={styles.textIcon}>Favoritos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconButton}>
                  <Icon name="question" size={50} color={'#fff'}></Icon>
                  <Text style={styles.textIcon}>Ajuda</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconButton}
                  onPress={() => linkTo('/Perfil')}
                >
                  <Icon name="user-circle" size={50} color={'#fff'}></Icon>
                  <Text style={styles.textIcon}>Perfil</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </View>
      </ImageBackground>
    </View>
  );
}