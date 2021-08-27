import APIService from './APIServices';
import WeatherService from './WeatherService';

const apiServiceInstance = new APIService();
const weatherService = new WeatherService(apiServiceInstance);

export { weatherService };
