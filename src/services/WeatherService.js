import APIService from './APIServices';

class WeatherService {
  instance = null;

  constructor(instance = new APIService()) {
    this.instance = instance;
  }

  getDayDetail() {
    const params = {
      q: 'danang,vn',
      lat: '35',
      lon: '139',
      cnt: '10',
      units: 'metric or imperial',
    };
    return this.instance.get('', params);
  }
}

export default WeatherService;
