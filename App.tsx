import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View
        onTouchStart={(event) => {
          Alert.alert('Toque', 'Toque inicializado!')
        }}
      >
        <Text>Hello World!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
