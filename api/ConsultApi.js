import axios from 'axios';

export default function getCurrentWeather(locationCoords) {
  return new Promise(async (resolve, reject) => {
    const lat = locationCoords.latitude;
    const lon = locationCoords.longitude;

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d4da1267b1c6d192d250e649dd2d3bfb`
      );
      const data = response.data;
      const locationName = data.name + ', ' + data.sys.country;
      const temperatureMin = data.main.temp_min;
      const temperatureMax = data.main.temp_max;
      const wind = data.wind.speed;
      const humidity = data.main.humidity;
      const currentTemperature = data.main.temp;

      const results = [
        currentTemperature,
        temperatureMin,
        temperatureMax,
        locationName,
        wind,
        humidity,
      ];
      resolve(results);
    } catch (error) {
      console.log('Erro na consulta da API:', error);
      reject(error);
    }
  });
}