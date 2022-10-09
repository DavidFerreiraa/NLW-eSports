import { Image, FlatList, SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';

import { styles } from './styles';

import LogoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';
import { NativeScreenNavigationContainer } from 'react-native-screens';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])

  const navigation = useNavigation();

  function handleOpenGame({id, title, bannerURL}: GameCardProps){
    navigation.navigate('game', {id, title, bannerURL});
  }

  useEffect(() => {
    fetch('http://192.168.1.111:3333/games')
    .then((response) => response.json())
    .then(data => {
      setGames(data)
    })
  }, []);
  return (
    <Background>
      <SafeAreaView style={styles.container}>
          <Image 
          source={LogoImg}
          style={styles.logo}
          />
          <Heading 
          title='Encontre seu duo!' 
          subtitle='Selecione o game que quer jogar'
          />
          <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GameCard
            data={item}
            onPress={() => {handleOpenGame(item)}}
            />
          )}
          horizontal={true}
          contentContainerStyle={styles.contentList}
          />
      </SafeAreaView>
    </Background>
  );
}