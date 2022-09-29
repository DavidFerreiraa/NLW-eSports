import { StatusBar } from "react-native";
import { Background } from "./src/components/Background";
import { Loading } from "./src/components/Loading";
import { Home } from "./src/components/Loading/Home";
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter'

export default function App() {
  // fontsLoaded informa se as fontes foram carregadas
  const [fontsLoaded] = useFonts({
    //Fontes que serão usadas no projeto
    Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black
  });
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      { fontsLoaded ? <Home/> : <Loading/> }
    </Background>
  );
}
