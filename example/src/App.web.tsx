import * as React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import MapView from 'react-native-maps';
import config from '../temp.config';

const API_KEY = config.API_KEY;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>React Native Maps for Web</Text>
      <MapView apiKey={API_KEY} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
