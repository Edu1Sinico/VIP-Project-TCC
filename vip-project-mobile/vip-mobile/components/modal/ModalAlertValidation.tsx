import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// Link do site de ícones: https://oblador.github.io/react-native-vector-icons/

export function ModalAlertValidation({ messageAlert, handleClose }) {

    return (

        // Campos vazios
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.titleSection}>
                    <Icon name="alert-triangle" size={40} color="#fff"/>
                    <Text style={styles.title}>{messageAlert}</Text>
                </View>

                <TouchableOpacity style={styles.confirmButton} onPress={handleClose}>
                    <Text style={styles.confirmTextButton}>Fechar</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(25,25,25,0.5)',
        flex: 1,
        width: '100%',
        height: '100%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    content: {
        backgroundColor: "#FFF",
        width: '80%',
        height: 200,
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 8,
    },

    titleSection: {
        backgroundColor: '#166CE2',
        width: '100%',
        height: '50%',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    title: {
        fontSize: 20,
        fontWeight: '400',
        color: '#fff',
    },

    confirmButton: {
        padding: 15,
        height: 40,
        width: 100,
        marginTop: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#166CE2',
    },

    confirmTextButton: {
        fontSize: 15,
        fontWeight: 500,
        color: '#fff',
    }
});