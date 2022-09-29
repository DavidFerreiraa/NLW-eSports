import { ImageBackground, ImageSourcePropType, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import { styles } from './styles';

export interface GameCardProps {
    id: string,
    name: string,
    ads: string,
    cover: ImageSourcePropType;
}

interface Props extends TouchableOpacityProps { //Forma de centralizar a tipagem
    data: GameCardProps;
}

export function GameCard({data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
        <ImageBackground
        style={styles.cover}
        source={data.cover}
        />
    </TouchableOpacity>
  );
}