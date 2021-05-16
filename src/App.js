import "./App.css";
import Map from "./components/Map";
import { WrappedMap } from "./components/Map";
function App() {
  return (
    <>
      <header>
        <h2>Find all the recreational parks here</h2>
      </header>
      <main style={{ width: "100vw", height: "100vh" }}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </main>
    </>
  );
}

export default App;
