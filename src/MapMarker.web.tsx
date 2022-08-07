import React from 'react';
import {MapMarkerProps} from './MapMarker';

export const MapMarker = (props: MapMarkerProps) => {
  console.log('here');
  return (
    <div
      lat={props.coordinate.latitude}
      lng={props.coordinate.longitude}
      onClick={() => props.onPress}
      style={{
        width: '20px',
        height: '20px',
      }}
    />
  );
};

export default MapMarker;
