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
import MapStyles from "./MapStyles";

function Map() {
  //store selected site data
  const [selectedTourSite, setSelectedTourSite] = useState(null);
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 5.55, lng: -0.02 }}
      defaultOptions={{ styles: MapStyles }}
    >
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
            <button>
              <a
                href="https://www.tripadvisor.com/Attractions-g293797-Activities-Accra_Greater_Accra.html"
                target="_blank"
              >
                Read Review
              </a>
            </button>
            <img src={selectedTourSite.img} alt="tours-site" />
          </div>
        </InfoWindow>
      ) : null}
    </GoogleMap>
  );
}

//wrap the map in HOC
export const WrappedMap = withScriptjs(withGoogleMap(Map));

export default Map;
