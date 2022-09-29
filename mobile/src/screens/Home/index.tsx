import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';

import LogoImg from '../../assets/logo-nlw-esports.png'

export function Home() {
  return (
    <View style={styles.container}>
        <Image 
        source={LogoImg}
        style={styles.logo}
        />
    </View>
  );
}