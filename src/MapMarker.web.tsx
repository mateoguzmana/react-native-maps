import * as React from 'react';
// import {MapMarkerProps} from './MapMarker';

export const MapMarker = (props: any) => {
  const coordinates = {
    lat: props.coordinate.latitude,
    lng: props.coordinate.longitude,
    text: props.text,
  };

  return (
    <div
      {...coordinates}
      onClick={() => props.onPress}
      style={{
        width: '100px',
        height: '100px',
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        // backgroundColor: 'red',
        position: 'absolute',
      }}>
      <Callout />
      <h1 style={{fontSize: 30}}>📍</h1>
    </div>
  );
};

const Callout = (props: any) => {
  return (
    <div
      {...props}
      style={{
        margin: 0,
        width: 40,
        height: 20,
        position: 'relative',
        // overflow: 'hidden',
      }}
    />
  );
};

export default MapMarker;
