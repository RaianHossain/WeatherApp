import "./App.css";
import Home from "./pages/Home";
import FavoriteProvider from "./providers/FavoriteProvider";
import LocationProvider from "./providers/LocationProvider";

function App() {
  return (
    <LocationProvider>
      <FavoriteProvider>
        <Home />
      </FavoriteProvider>
    </LocationProvider>
  );
}

export default App;
