import { WeatherProvider } from './WeatherContext';
import Startseite from './components/Startseite';
import "./App.css"

const App = () => {
  return (
    <WeatherProvider>
      <Startseite />
    </WeatherProvider>
  );
};

export default App;