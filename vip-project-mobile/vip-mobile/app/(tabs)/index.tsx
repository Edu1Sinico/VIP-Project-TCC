import { useState } from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const background = require("@/assets/images/background/bus_background.png");


export default function loginScreen() {

  const [email, setEmail] = useState('');  // Estado para armazenar o valor do campo de texto
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode='repeat' style={styles.backgroundImage}>
        <View style={styles.loginSection}>

          <View style={styles.topSection}>
            <View style={styles.userSection}>
              <Icon name="user" size={110} color="#166CE2" />
            </View>

            <Text style={styles.title}>Login</Text>
          </View>

          <View style={styles.middleSection}>

            {/* Campo de Usuário */}
            <View style={styles.inputSection}>
              <View style={styles.iconInputSection}>
                <Icon name="user" size={20} color="#fff" />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Usuário"
                value={user}
                onChangeText={setUser}
              />
            </View>

            {/* Campo do Email */}
            <View style={styles.inputSection}>
              <View style={styles.iconInputSection}>
                <Icon name="at" size={20} color="#fff" />
              </View>
              <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail} // Atualiza o estado com o texto digitado
                keyboardType="email-address" // Define o tipo de teclado como email
              />
            </View>

            {/* Campo de Senha */}
            <View style={styles.inputSection}>
              {/* Campo da Senha */}
              <View style={styles.iconInputSection}>
                <Icon name="lock" size={20} color="#fff" />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={true} // Oculta o texto
                value={password}
                onChangeText={setPassword} // Atualiza o estado com o texto digitado
              />
            </View>

            <TouchableOpacity style={styles.touchLink}>
              <Text style={styles.link}>Esqueceu a senha? Clique aqui!</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.bottomSection}>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginTextButton}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchLink}>
              <Text style={styles.link}>Não possuí uma conta? Registra-se!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  loginSection: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderStyle: "solid",
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  topSection: {
    width: '100%',
    height: 250,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  userSection: {
    width: 150,
    height: 150,
    backgroundColor: '#FFF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: '400',
    color: '#166CE2',
  },

  middleSection: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  inputSection: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },


  input: {
    width: '65%',
    height: 45,
    backgroundColor: '#fff',
    paddingLeft: 10,
    color: '#C7C7C7',
  },

  iconInputSection: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#166CE2',
  },

  touchLink: {
    width: '100%',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  link: {
    color: '#707070',
    fontSize: 14,
  },

  bottomSection: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginButton: {
    padding: 15,
    height: 70,
    width: 120,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#166CE2',
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

  loginTextButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },


});
