import React from "react";
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
} from "react-google-maps";
import { tours } from "./data/toursData";
import uuid from "react-uuid";

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 5.55, lng: -0.02 }}

      //   defaultCenter={{ lat: -30.000233, lng: 136.209152 }}
    >
      {tours.map((site) => {
        return (
          <Marker
            key={uuid()}
            position={{ lat: site.cordinates[0], lng: site.cordinates[1] }}
          />
        );
      })}
    </GoogleMap>
  );
}

//wrap the map in HOC
export const WrappedMap = withScriptjs(withGoogleMap(Map));

export default Map;
