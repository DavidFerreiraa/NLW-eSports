import { View } from 'react-native';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

export interface DuoCardProps {
  hourEnd: string,
  hoursStart: string,
  id: string;
  name: string;
  useVoiceChannel: boolean,
  weekDays: string[],
  yearsPlaying: number;
}

interface Props {
  data: DuoCardProps
}

export function DuoCard({data}: Props) {
  console.log(data)
  return (
    <View style={styles.container}>
        <DuoInfo
        label="Nome"
        value={data.name}
        />
        <DuoInfo
        label='Tempo de jogo'
        value={`${data.yearsPlaying} anos`}
        />
        <DuoInfo
        label='Disponibilidade'
        value={`${data.weekDays.length} dias - ${data.hoursStart}-${data.hourEnd}`}
        />
        <DuoInfo
        label='Chamada de áudio'
        value={data.useVoiceChannel? "Sim": "Não"}
        colorValue={data.useVoiceChannel?"green":"red"}
        />
    </View>
  );
}