import * as React from 'react';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import config from '../temp.config';

const API_KEY = config.API_KEY;
const DEFAULT_LATITUDE = 6.2447;
const DEFAULT_LONGITUDE = -75.494907;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>React Native Maps for Web - Basic map view example</Text>
      <MapView apiKey={API_KEY} style={styles.map} pitchEnabled={false}>
        <View
          lat={DEFAULT_LATITUDE}
          lng={DEFAULT_LONGITUDE}
          text="My Marker"
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: 'red',
          }}
        />
      </MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: '100vh',
    width: '100%',
  },
});
