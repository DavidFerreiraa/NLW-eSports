import { View, Image, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

import { styles } from './styles';

import LogoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';

import { GAMES } from '../../utils/games';

interface Games {
  bannerURL: string;
  id: string;
  title: string;
  _count: {
    ads: number
  }
}

export function Home() {
  const [games, setGames] = useState<Games[]>([])
  useEffect(() => {
    fetch('http://192.168.1.111:3333/games')
    .then((response) => response.json())
    .then(data => {
      setGames(data)
    })
  }, []);
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
        <FlatList
        data={games}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GameCard
          data={item}
          />
        )}
        horizontal={true}
        contentContainerStyle={styles.contentList}
        />
    </View>
  );
}