// src/components/Header.js
import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Icon name="ellipsis-h" size={20} color="#fff" />
      </TouchableOpacity>

      <Image
        source={require("@/assets/images/vip_transportes_preto_e_branco.png")}
        style={styles.logo}
      />

      <View style={styles.user_section}>
        <TouchableOpacity>
          <Icon name="bell" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="user" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 85,
        flexDirection: 'column',
    },

    logo: {
        width: 15,
    },
});

export default Header;
