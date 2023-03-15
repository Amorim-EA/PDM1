import { StatusBar } from 'expo-status-bar';
import React from 'react-native';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Nome = () => {
  return (
  <View style={}>  
  <Text>{}</Text>;
  </View>
  );
}

const Tel = (props) => {
  return (
  <View style={}>  
  <Text>{props}</Text>;
  </View>
  );
}

export default function App() {
  return (
    <View style={}>
     <Nome />
     <Tel />
     <TextInput 
     defaultValue='Me de um nome pedin !'/>
    </View>
  );
}