import "./App.css";
import { WrappedMap } from "./components/Map";
function App() {
  return (
    <>
      <header>
        <h2>WhereNext?</h2>
        <p>
          Locate and explore interesting tourist sites in the city of Accra,
          Ghana's Capital
        </p>
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
