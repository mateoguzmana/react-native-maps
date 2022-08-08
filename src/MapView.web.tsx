import * as React from 'react';
import GoogleMapReact from 'google-map-react';
import {MapViewProps} from './MapView';

const DEFAULT_LATITUDE = 6.2447;
const DEFAULT_LONGITUDE = -75.494907;
const DEFAULT_ZOOM = 11;
const DEFAULT_API_KEY = '';

function MapView(props: MapViewProps) {
  const defaultCenter = {
    lat: props.region?.latitude ?? DEFAULT_LATITUDE,
    lng: props.region?.longitude ?? DEFAULT_LONGITUDE,
  };

  if (props.provider !== 'google') {
    console.info('Provider not supported: ' + props.provider);
  }

  return (
    <div style={{display: 'flex', height: '100%', width: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{key: props.apiKey ?? DEFAULT_API_KEY}}
        defaultCenter={defaultCenter}
        defaultZoom={props.minZoomLevel ?? DEFAULT_ZOOM}>
        {props.children}
      </GoogleMapReact>
    </div>
  );
}

MapView.defaultProps = {
  provider: 'google',
};

export default MapView;
