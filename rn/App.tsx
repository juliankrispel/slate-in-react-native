import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview'

export default function App() {
  console.log('hello')
  return (
    <WebView
      source={{ uri: "http://localhost:3000/" }}
      onMessage={(m) => {
        console.log('hello')
        console.log(m.nativeEvent.data);
      }}
    />
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
