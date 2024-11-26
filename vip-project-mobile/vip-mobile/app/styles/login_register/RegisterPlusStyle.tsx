import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#166CE2",
    },

    // Top Section
    sectionTop: {
        width: "100%",
        height: "40%",
        alignItems: "center",
    },

    header: {
        width: "100%",
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
    },
    banner: {
        flex: 1,
        width: '100%', // Garante que a imagem cubra toda a largura
        height: '135%', // Garante que a imagem cubra toda a altura
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'center', // Ajusta a imagem para cobrir todo o fundo
    },

    userbanner: {
        width: 90,
        height: 90,
        borderRadius: 50,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        backgroundColor: "#fff",
    },

    logo_section: {
        width: "60%",
        alignItems: "center",
        justifyContent: "center",
    },

    logo: {
        width: 100,
        height: 100,
    },

    title: {
        fontWeight: "bold",
        color: "#fff",
        margin: 5,
        fontSize: 20,
    },

    // Bottom Section
    sectionBottom: {
        flex: 1,
        width: "100%",
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },

    formSection: {
        width: '100%',
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputContainer: {
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
        paddingBottom: 5,
    },

    radioGroup: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
    },

    radioButton: {
        flexDirection: "row",
        alignItems: "center",
    },

    radioCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#166CE2",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 5,
    },

    radioSelected: {
        backgroundColor: "#166CE2",
    },

    addButton: {
        padding: 10,
        height: 70,
        width: 250,
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#166CE2',
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },

    addTextButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },

    inputSection: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        width: '65%',
        height: 50,
        backgroundColor: '#EDEDED',
        paddingLeft: 10,
    },

    inputError: {
        borderColor: 'red',
        borderWidth: 2,
    },

    iconInputSection: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#166CE2',
    },

    iconInputError: {
        backgroundColor: 'red',
    },

});
