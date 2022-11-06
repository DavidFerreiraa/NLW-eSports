import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native';

import { Entypo } from '@expo/vector-icons'

import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { DuoMatch } from '../../components/DuoMatch';

import { styles } from './styles';
import LogoImg from '../../assets/logo-nlw-esports.png'
import { THEME } from '../../theme';
import { GameParams } from '../../@types/navigation';

export function Game() {

    const [ads, setAds] = useState<DuoCardProps[]>([])
    const [discordDuoSelected, setDiscordDuoSelected] = useState<string>('')
    const navigation = useNavigation();

    const route = useRoute();
    const game = route.params as GameParams;

    function handleGoBack() {
        navigation.goBack();
    }

    async function getUserDiscord(adsId: string){
       fetch(`http://192.168.1.111:3333/ads/${adsId}/discord`)
           .then((response) => response.json())
           .then((data) => {
              setDiscordDuoSelected(data.discord);
           });
    }

    useEffect(() => {
        fetch(`http://192.168.1.111:3333/games/${game.id}/ads`)
        .then((response) => response.json())
        .then(data => {
          setAds(data)
        })
      }, []);

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
            <FlatList
            data={ads}
            keyExtractor={item => item.id}
            horizontal={true}
            renderItem={({ item }) => (
                <DuoCard
                data={item}
                onConect={() => {getUserDiscord(item.id)}}
                />
              )}
            style={styles.conteinerList}
            contentContainerStyle={ads.length > 0? styles.contentList : styles.contentEmptyList}
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={() => (
              <Text style={styles.emptyListText} numberOfLines={2}>
                Sem anúncios, {'\n'}que pena...
              </Text>
  )}
            />
            <DuoMatch
            visible={discordDuoSelected.length > 0}
            discord={discordDuoSelected}
            onClose={() => setDiscordDuoSelected('')}
            />
        </SafeAreaView>
    </Background>
  );
}