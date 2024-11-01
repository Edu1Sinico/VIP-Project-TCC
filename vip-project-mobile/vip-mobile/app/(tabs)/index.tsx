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

// import React from 'react';
// import { useState } from 'react';
// import { View, Text, TouchableOpacity  } from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome5';

// // Importando a estilização
// import styles from '@/app/styles/internal_pages/CashPageStyle'

// // Importando o Header como componente
// import Header from '@/components/header/header';


// export default function cashScreen() {

//   // useState
//     const [showBalance, setShowBalance] = useState(true); // Cria um useState booleano para a mudança de estado da visibilidade do saldo

//   return (
//     <View style={styles.container}>
//       <Header />

//       <View style={styles.mainSection}> 
//         <View style={styles.balanceSection}>
//           <View style={styles.balanceLeftSection}>
//             <View style={styles.balanceTextSection}>
//               <Text style={styles.balanceText}>Saldo Disponível</Text>
//             </View>
            
//             <View style={styles.balanceValueSection}>
//               <Text style={styles.realIcon}>R$ </Text>
//               <Text style={styles.valueText}>{showBalance ? '●●●●' : '0,00'}</Text>
//             </View>
//           </View>

//           <View style={styles.balanceRightSection}>
//             <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
//               <Icon
//                 name={showBalance ? 'eye' : 'eye-slash'} // Alterna o ícone com base no estado
//                 size={30}
//                 color="#166CE2"
//               />
//             </TouchableOpacity>
//           </View>
//         </View>

//         <View style={styles.buttonSection}>
//           <View style={styles.cashButtonsSection}>
//             <TouchableOpacity style={styles.iconButton}>
//               <Icon name="wallet" size={90} color="#166CE2"/>
//               <Text style={styles.buttonText}>Adicionar Créditos</Text>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.cashButtonsSection}>
//             <TouchableOpacity style={styles.iconButton}>
//               <Icon name="credit-card" size={90} color="#166CE2"/>
//               <Text style={styles.buttonText}>Realizar Pagamento</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// }