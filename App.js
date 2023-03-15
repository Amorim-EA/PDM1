import { StatusBar } from 'expo-status-bar';
import React from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

const getNomeCompleto = (p, s, t) => {return `${p} ${s} ${t}`};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>getNomeCompleto("Erick", "da Silva", "Amorim")</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
});