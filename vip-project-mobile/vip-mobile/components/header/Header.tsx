// src/components/Header.js
import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Icon name="ellipsis-h" size={25} color="#fff" />
      </TouchableOpacity>

      {/* <Image
        source={require("@/assets/images/vip_transportes_preto_e_branco.png")}
        style={styles.logo}
      /> */}

      <View style={styles.user_section}>
        <TouchableOpacity style={styles.notify_button}>
          <Icon name="bell" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.user_button}>
          <Icon name="user" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    width: 25,
  },

  user_section: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '20%',
    justifyContent: 'space-evenly',
    height: '90%',
  },

  notify_button: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

   user_button: {
    padding: 20,
    width: 25,
    height: 25,
    borderRadius: 25,
    borderWidth: 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
  },

});