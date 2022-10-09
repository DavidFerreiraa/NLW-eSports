import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native';

import { Entypo } from '@expo/vector-icons'

import { Background } from '../../components/Background';
import { styles } from './styles';
import LogoImg from '../../assets/logo-nlw-esports.png'
import { THEME } from '../../theme';
import { GameParams } from '../../@types/navigation';
import { Heading } from '../../components/Heading';
import { GameCardProps } from '../../components/GameCard';

export function Game() {

    const navigation = useNavigation();

    const route = useRoute();
    const game = route.params as GameParams;

    function handleGoBack() {
        navigation.goBack();
    }

  return (
    <Background>
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Entypo name="chevron-thin-left" color={THEME.COLORS.CAPTION_300} size={20} />
                </TouchableOpacity>
                <Image
                    source={LogoImg}
                    style={styles.logo}
                />
                <View style={styles.right}/>
            </View>

            <Image 
            source={{uri: game.bannerURL}}
            style={styles.cover}
            resizeMode="cover"
            />

            <Heading
            title={game.title}
            subtitle='Conecte-se e comece a jogar!'
            />
        </SafeAreaView>
    </Background>
  );
}