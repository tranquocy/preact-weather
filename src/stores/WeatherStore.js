import { types, flow } from 'mobx-state-tree';

import { weatherService } from '../services';

const WeatherStore = types
  .model({
    data: types.frozen({}),
    state: types.string,
  })
  .actions((self) => ({
    fetchData: flow(function* fetchData() {
      self.data = {};
      self.state = 'pending';
      try {
        self.data = yield weatherService.getDayDetail();
        self.state = 'done';
      } catch (error) {
        console.error('Failed to fetch data', error);
        self.state = 'error';
      }
    }),
  }));

export default WeatherStore;
