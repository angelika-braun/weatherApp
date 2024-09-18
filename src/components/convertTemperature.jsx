const convertTemperature = (temperature, unit) => {
      if (unit === 'celsius') {
        return temperature;
      } else if (unit === 'fahrenheit') {
        return temperature * 9 / 5 + 32;
      }
    };
    
    export default convertTemperature;