import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Beatriz Krisan Falcão e Adriano Bendazzoli Zorzenon</Text>
      <Link href="/about" style={styles.button}>
        Ir para página Sobre
      </Link>

       <Link href="/formacao" style={styles.button}>
        Ir para página Formação
      </Link>

       <Link href="/Habilidades" style={styles.button}>
        Ir para página Habilidades
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#344457ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#8e98f0ff',
  },
});