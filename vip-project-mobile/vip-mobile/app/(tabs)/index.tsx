import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './login_register/login';
import RegisterScreen from './login_register/register';

import { Routes } from '../routes'; // Importando o sistema de navegação com o BottomTabNavigator

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{
          headerShown: false,  // Removendo o cabeçalho
        }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{
          animation: 'fade'
        }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{
          animation: 'fade'
        }} />
        <Stack.Screen
          name="Home"
          component={Routes} // Aqui você usa o Routes com o BottomTabNavigator
          options={{ headerShown: false, animation: 'fade' }} // Esconde o header se necessário
        />
      </Stack.Navigator>
    </NavigationContainer >
  )
}

// // src/screens/HomeScreen.js
// import React = require('react');
// import { View, Text } from 'react-native';

// // Importando a estilização
// import styles from '@/app/styles/home/HomeStyle';

// // Importando o Header como componente
// import Header from '@/components/header/Header';

// export default function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <Header />

//       <View style={styles.user_section}>
//         <Text style={styles.text_title}>Bem-vindo(a), Usuário!</Text>
//       </View>

//       {/* Seção principal */}
//       <View >

//       </View>
//     </View>
//   );
// }