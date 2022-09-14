import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello React Native</Text>
      <Button title='Me toque'/>
      <StatusBar style="auto" />
    </View>
  );
}

interface ButtonProps {
  title: String;
}

function Button(props: ButtonProps) {
  return(
    <TouchableOpacity>
      <Text style={styles.title}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
  }
});
