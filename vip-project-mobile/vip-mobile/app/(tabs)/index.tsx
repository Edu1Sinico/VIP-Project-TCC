import { useState } from 'react';
import { View, StyleSheet, Text, Modal, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// Importando a tela de aviso do campo vazio
import { ModalAlertValidation } from '@/components/modal/ModalAlertValidation';

const logo = require("@/assets/images/vip_tranportes_logo_transparent.png");
const background = require("@/assets/images/background/bus_background.png");



export default function loginScreen() {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  // Validação de campos
  function inputValidation(user, email, password) {
    if (user === '' || email === '' || password === '') {
      setModalVisible(true);  // Exibe o modal se algum campo estiver vazio
      return false;
    }
    // Se a validação passar, prossegue com o login ou outra ação
    return true;
  }

  const handleRegister = () => {
    if (inputValidation(user, email, password)) {

    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode='repeat' style={styles.backgroundImage}>
        <View style={styles.registerSection}>

          <View style={styles.topSection}>
            <View style={styles.userSection}>
              <Icon name="user" size={110} color="#166CE2" />
            </View>

            <Text style={styles.title}>Cadastrar-se</Text>
          </View>
          <View style={styles.middleSection}>

            {/* Campo de usuário */}
            <View style={styles.inputSection}>
              <View style={styles.iconInputSection}>
                <Icon name="user" size={20} color="#fff" />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Usuário"
                value={user}
                onChangeText={setUser}
                underlineColorAndroid="transparent"
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
                underlineColorAndroid="transparent"
              />
            </View>

            {/* Campo de Senha */}
            <View style={styles.inputSection}>
              <View style={styles.iconInputSection}>
                <Icon name="lock" size={20} color="#fff" />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={true} // Oculta o texto
                value={password}
                onChangeText={setPassword} // Atualiza o estado com o texto digitado
                underlineColorAndroid="transparent"
              />
            </View>

            {/* Campo para confirmar Senha */}
            <View style={styles.inputSection}>
              <View style={styles.iconInputSection}>
                <Icon name="unlock-alt" size={20} color="#fff" />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Confirmar Senha"
                secureTextEntry={true} // Oculta o texto
                value={confirmPassword}
                onChangeText={setConfirmPassword} // Atualiza o estado com o texto digitado
                underlineColorAndroid="transparent"
              />
            </View>

          </View>

          <View style={styles.bottomSection}>
            <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
              <Text style={styles.registerTextButton}>Registrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchLink}>
              <Text style={styles.link}>Já possuí uma conta? Realize o seu Login!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground >

      {/* Modal de alerta */}
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
      >
        <ModalAlertValidation handleClose={() => setModalVisible(false)} />
      </Modal>
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

  registerSection: {
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
    height: 200,
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


  logo: {
    width: 175,
    height: 165,
  },

  title: {
    fontSize: 20,
    fontWeight: '400',
    color: '#166CE2',
  },

  middleSection: {
    width: '100%',
    height: 256,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  inputSection: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    fontSize: 15,
    marginBottom: 3,
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
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  registerButton: {
    padding: 15,
    height: 50,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F48F2',
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

  registerTextButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },

});
