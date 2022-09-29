import { View, Image } from 'react-native';

import { styles } from './styles';

import LogoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../Heading';

export function Home() {
  return (
    <View style={styles.container}>
        <Image 
        source={LogoImg}
        style={styles.logo}
        />
        <Heading 
        title='Encontre seu duo!' 
        subtitle='Selecione o game que quer jogar'
        />
    </View>
  );
}