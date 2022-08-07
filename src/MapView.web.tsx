import React from 'react';
import GoogleMapReact from 'google-map-react';
import {MapViewProps} from './MapView';

const AnyReactComponent = ({text}: {text: string}) => <div>{text}</div>;

export function GoogleMapView({apiKey}: MapViewProps) {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const containerStyles = {height: '100vh', width: '100%'};

  return (
    <div style={containerStyles}>
      <GoogleMapReact
        bootstrapURLKeys={{key: apiKey ?? ''}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}>
        <AnyReactComponent text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMapView;
