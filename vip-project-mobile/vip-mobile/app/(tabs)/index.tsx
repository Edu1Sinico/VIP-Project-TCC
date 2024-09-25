import { useState } from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

const logo = require("@/assets/images/vip_tranportes_logo_transparent.png");
const background = require("@/assets/images/background/bus_background.png");


export default function loginScreen() {

  const [email, setEmail] = useState('');  // Estado para armazenar o valor do campo de texto
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode='repeat' style={styles.backgroundImage}>
        <View style={styles.loginSection}>

          <View style={styles.topSection}>
            <Image
              source={logo}
              style={styles.logo}
            />
            <Text style={styles.title}>Login</Text>
          </View>

          <View style={styles.middleSection}>
            {/* Campo do Email */}
            <View style={styles.inputSection}>
              <Text style={styles.label}>E-mail:</Text>
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
              <Text style={styles.label}>Senha:</Text>
              <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={true} // Oculta o texto
                value={password}
                onChangeText={setPassword} // Atualiza o estado com o texto digitado
              />

              <TouchableOpacity style={styles.touchLink}>
                <Text style={styles.link}>Esqueceu a senha? Clique aqui!</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.bottomSection}>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginTextButton}>Login</Text>
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 15,
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "transparent",
    width: '80%',
    height: '90%',
    flexDirection: 'column',
    alignItems: 'center',
  },

  topSection: {
    width: '100%',
    height: 198,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  logo: {
    width: 175,
    height: 165,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#AB9E59',
  },

  middleSection: {
    width: '100%',
    height: 198,
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  inputSection: {
    width: '85%',
    flexDirection: 'column',
  },

  label: {
    fontSize: 15,
    marginBottom: 3,
  },

  input: {
    height: 40,
    borderColor: 'transparent',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 10,
    color: '#C7C7C7',
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
    height: 198,
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
    backgroundColor: '#0F48F2',
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
