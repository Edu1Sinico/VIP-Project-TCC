import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#166CE2',
    },

    user_section: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    text_title: {
        fontSize: 22,
        fontWeight: 'light',
        color: '#fff',
    },

    main_section: {
        flex: 1,
        width: '100%',
        marginTop: 50,
        backgroundColor: '#fff',
        borderTopRightRadius: 75,
        borderTopLeftRadius: 75,
        padding: 30,
        flexDirection: 'column',
        alignItems: 'center',
    },

    main_top_section: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
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
        color: '#C7C7C7',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    },

    iconInputSection: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#166CE2',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    },


});
