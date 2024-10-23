import { useState } from 'react';
import { View, Text, Modal, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { useLinkTo } from '@react-navigation/native';
// Importando a estilização
import styles from '@/app/styles/login_register/LoginStyle';

import Icon from 'react-native-vector-icons/FontAwesome';
// Importando a tela de aviso do campo vazio
import { ModalAlertValidation } from '@/components/modal/ModalAlertValidation';
import React from 'react';


const background = require("@/assets/images/background/bus_background.png");

export default function LoginScreen() {
    const [email, setEmail] = useState('');  // Estado para armazenar o valor do campo de texto
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const linkTo = useLinkTo(); // Sistema de links do react navigator

    // Estados de erro para campos individuais
    const [userError, setUserError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    // Mensagem de alerta
    let message = "";
    const [messageAlert, setMessageAlert] = useState("");


    // Validação de campos
    function inputValidation(user, email, password) {
        let isValid = true;

        // Verifica se todos os campos estão vazios
        if (!(user === '' && email === '' && password === '')) {
            // Validações para o campo de 'Usuário'
            if (user === '') {
                setUserError(true);
                message = 'O campo de usuário não pode ser vazio!';
                isValid = false;
            }
            else {
                setUserError(false);
            }

            // Validação para Email
            if (!(email === '')) {
                // Verifica se o campo de Email contém o "@"
                if (!email.includes('@') || !email.includes('.com')) {
                    message = 'O campo de e-mail precisa conter o (@) ou (.com)!';
                    setEmailError(true);
                    isValid = false;
                }
                else {
                    setEmailError(false);
                }
            } else {
                message = 'O campo de e-mail não pode ser vazio!';
                isValid = false;
                setEmailError(true);
            }

            // Validação do Campo de senha
            if (!(password === '')) {
                if (password.length < 8) { // Validação temporária, precisa ser trocada para a verificação de igualdade entre senhas no banco de dados.
                    message = 'O campo de senha precisar ser maior que 8 caracteres!';
                    setPasswordError(true);
                    isValid = false;
                }
                else {
                    setPasswordError(false);
                }
            } else {
                message = 'O campo de senha não pode ser vazio!';
                isValid = false;
                setPasswordError(true);
            }

        }
        else {
            // Insere a mensagem de validação
            message = 'Por favor, preenche todos os campos!';
            isValid = false;
            setUserError(true);
            setEmailError(true);
            setPasswordError(true);
        }

        if (!isValid) {
            setMessageAlert(message); // Inseri a mensagem de alerta no setState
            setModalVisible(true); // Exibe o modal se houver erro
        }

        return isValid; // Retorna se o formulário é válido ou não
    }

    const handleLogin = () => {
        if (inputValidation(user, email, password)) {
            // Lógica de login aqui
            console.log("Login realizado com sucesso!");
        }
    };

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
                            <View style={[styles.iconInputSection, userError && styles.iconInputError]}>
                                <Icon name="user" size={20} color="#fff" />
                            </View>
                            <TextInput
                                style={[styles.input, userError && styles.inputError]} // Aplica o estilo de erro se userError for true
                                placeholder="Usuário"
                                value={user}
                                onChangeText={setUser}
                                underlineColorAndroid="transparent"
                            />
                        </View>

                        {/* Campo do Email */}
                        <View style={styles.inputSection}>
                            <View style={[styles.iconInputSection, emailError && styles.iconInputError]}>
                                <Icon name="at" size={20} color="#fff" />
                            </View>
                            <TextInput
                                style={[styles.input, emailError && styles.inputError]} // Aplica o estilo de erro se emailError for true
                                placeholder="E-mail"
                                value={email}
                                onChangeText={setEmail} // Atualiza o estado com o texto digitado
                                keyboardType="email-address" // Define o tipo de teclado como email
                                underlineColorAndroid="transparent"
                            />
                        </View>

                        {/* Campo de Senha */}
                        <View style={styles.inputSection}>
                            <View style={[styles.iconInputSection, passwordError && styles.iconInputError]}>
                                <Icon name="lock" size={20} color="#fff" />
                            </View>
                            <TextInput
                                style={[styles.input, passwordError && styles.inputError]} // Aplica o estilo de erro se passwordError for true
                                placeholder="Senha"
                                secureTextEntry={true} // Oculta o texto
                                value={password}
                                onChangeText={setPassword} // Atualiza o estado com o texto digitado
                                underlineColorAndroid="transparent"
                            />
                        </View>

                        <TouchableOpacity style={styles.touchLink}>
                            <Text style={styles.link}>Esqueceu a senha? Clique aqui!</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.bottomSection}>
                        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                            <Text style={styles.loginTextButton}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchLink} onPress={() => linkTo('/Register')}>
                            <Text style={styles.link}>Não possuí uma conta? Registra-se!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground >

            {/* Modal de alerta */}
            < Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
            >
                <ModalAlertValidation messageAlert={messageAlert} handleClose={() => setModalVisible(false)} />
            </Modal >
        </View >
    );
}
