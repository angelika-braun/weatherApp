import convertTemperature from "./convertTemperature";

const Forecast = ({ forecast, unit }) => {
  return (
    <div>
      <h2>5-Tage-Vorhersage</h2>
      {forecast.list.map((day) => (
        <div key={day.dt}>
          <p>Datum: {day.dt_txt}</p>
          <p>Temperatur: {convertTemperature(day.main.temp, unit)}° {unit}</p>
          <p>Luftfeuchtigkeit: {day.main.humidity}%</p>
          <p>Wind: {day.wind.speed} m/s</p>
          <p>Beschreibung: {day.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;