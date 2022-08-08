import * as React from 'react';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import MapView, {MapMarker} from 'react-native-maps';
import config from '../temp.config';

const API_KEY = config.API_KEY;
const DEFAULT_LATITUDE = 6.2447;
const DEFAULT_LONGITUDE = -75.494907;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>React Native Maps for Web - Basic map view example</Text>
      <MapView apiKey={API_KEY} style={styles.map} pitchEnabled={false} >
        <MapMarker
          coordinate={{
            latitude: DEFAULT_LATITUDE,
            longitude: DEFAULT_LONGITUDE,
          }}
          text="My Marker"
        />
      </MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100vh',
    width: '100%',
  },
});
