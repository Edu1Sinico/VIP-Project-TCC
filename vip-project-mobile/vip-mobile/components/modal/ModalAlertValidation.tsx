import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// Link do site de ícones: https://oblador.github.io/react-native-vector-icons/

export function ModalAlertValidation({ handleClose }) {

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.titleSection}>
                    <Icon name="alert-triangle" size={35} color="#166CE2" />
                    <Text style={styles.title}>Por favor, preenche todos os campos!</Text>
                </View>

                <TouchableOpacity style={styles.confirmButton} onPress={handleClose}>
                    <Text style={styles.confirmTextButton}>Ok</Text>
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
        width: '90%',
        height: 170,
        paddingTop: 24,
        paddingBottom: 24,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 8,
    },

    titleSection: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    title: {
        fontSize: 20,
        fontWeight: '400',
        color: '#166CE2',
    },

    confirmButton: {
        padding: 15,
        height: 45,
        width: 85,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#166CE2',
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },

    confirmTextButton: {
        fontSize: 15,
        fontWeight: 500,
        color: '#fff',
    }
});