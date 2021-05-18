import React, { useState } from "react";
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
  InfoWindow,
} from "react-google-maps";
import { tours } from "./data/toursData";
import uuid from "react-uuid";

function Map() {
  //store selected site data
  const [selectedTourSite, setSelectedTourSite] = useState(null);
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 5.55, lng: -0.02 }}>
      {tours.map((site) => {
        return (
          <Marker
            key={uuid()}
            position={{ lat: site.cordinates[0], lng: site.cordinates[1] }}
            onClick={() => setSelectedTourSite(site)}
          />
        );
      })}
      {/* show info window if a site has been selected */}
      {selectedTourSite ? (
        <InfoWindow
          position={{
            lat: selectedTourSite.cordinates[0],
            lng: selectedTourSite.cordinates[1],
          }}
          onCloseClick={() => setSelectedTourSite(null)}
        >
          <div>
            <h2>{selectedTourSite.name}</h2>
            <p>{selectedTourSite.desc}</p>
            <img src={selectedTourSite.img} alt="tours-site" />
            <button>Read Review</button>
          </div>
        </InfoWindow>
      ) : null}
    </GoogleMap>
  );
}

//wrap the map in HOC
export const WrappedMap = withScriptjs(withGoogleMap(Map));

export default Map;
