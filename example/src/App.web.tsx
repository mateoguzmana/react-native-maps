import * as React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>React Native Maps for Web</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
