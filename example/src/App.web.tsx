import * as React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>React Native Maps for Web</Text>
      <MapView />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
