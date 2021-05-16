import React from "react";
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
} from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: -30.000233, lng: 136.209152 }}
    >
      <Marker />
    </GoogleMap>
  );
}

//wrap the map in HOC
export const WrappedMap = withScriptjs(withGoogleMap(Map));

export default Map;
