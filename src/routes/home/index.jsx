import { observer } from 'mobx-react-lite';
import { useEffect } from 'preact/hooks';
import Slider from 'react-slick';
import moment from 'moment';
import { Cloud } from 'react-feather';

import WeatherStore from '../../stores/WeatherStore';

const store = WeatherStore.create({
  data: {},
  state: '',
});

export function Home() {
  const date = new Date();
  const { list } = store.data;
  const settings = {
    customPaging(i) {
      return (
        <span class="slick-link">
          <div class="text-center mb-0 flex items-center justify-center flex-col items-center justify-center flex-col items-center justify-center flex-col">
            <span class="block my-1 font-bold">
              {moment(date.toString()).add(i, 'days').format('dddd')}
            </span>
            <Cloud />
            <span class="block my-1">{moment(date.toString()).add(i, 'days').format('D MMM')}</span>
          </div>
        </span>
      );
    },
    dots: true,
    arrows: false,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    store.fetchData();
  }, []);

  useEffect(() => {
    store.fetchData();
  }, []);

  const formatData = (value) => Math.floor(value);

  return (
    <>
      <div class="mx-auto p-4 bg-purple-400 h-screen flex flex-col justify-center">
        <div class="h-full">
          <div class="w-full flex justify-center items-center h-full">
            <div class="bg-gray-900 text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm h-4/6 bg-white dark:bg-gray-600 w-96 px-2 h-5/6">
              <Slider {...settings}>
                {list?.map((item, index) => (
                  <div class="px-3 py-6 relative" key={index}>
                    <div class="flex mb-4 justify-between items-center">
                      <div>
                        <h5 class="mb-0 font-medium text-xl">Da Nang</h5>
                        <h6 class="mb-0">
                          {moment(date.toString()).add(index, 'days').format('MMM Do YYYY')}
                        </h6>
                        <small>{item?.weather[0]?.main}</small>
                      </div>
                      <div class="text-right">
                        <h3 class="font-bold text-4xl mb-0">
                          <span>{formatData(item?.temp?.eve / 10)}°C</span>
                        </h3>
                      </div>
                    </div>
                    <div class="block sm:flex justify-between items-center flex-wrap">
                      <div class="sm:w-1/2 px-1">
                        <div class="flex mb-2 justify-between items-center">
                          <span class="font-bold">Cloud</span>
                          <small class="px-2 inline-block">{formatData(item?.clouds)}%</small>
                        </div>
                      </div>
                      <div class="sm:w-1/2 px-1">
                        <div class="flex mb-2 justify-between items-center">
                          <span class="font-bold">Feels like</span>
                          <small class="px-2 inline-block">
                            {formatData(item?.feels_like?.eve / 10)}°C
                          </small>
                        </div>
                      </div>
                      <div class="sm:w-1/2 px-1">
                        <div class="flex mb-2 justify-between items-center">
                          <span class="font-bold">Temp min</span>
                          <small class="px-2 inline-block">
                            {formatData(item?.temp?.min / 10)}°C
                          </small>
                        </div>
                      </div>
                      <div class="sm:w-1/2 px-1">
                        <div class="flex mb-2 justify-between items-center">
                          <span class="font-bold">Temp max</span>
                          <small class="px-2 inline-block">
                            {formatData(item?.temp?.max / 10)}°C
                          </small>
                        </div>
                      </div>
                      <div class="sm:w-1/2 px-1">
                        <div class="flex mb-2 justify-between items-center">
                          <span class="font-bold">Windy</span>
                          <small class="px-2 inline-block">{item?.speed} km/h</small>
                        </div>
                      </div>
                      <div class="sm:w-1/2 px-1">
                        <div class="flex mb-2 justify-between items-center">
                          <span class="font-bold">Sunrise</span>
                          <small class="px-2 inline-block">
                            {moment.unix(item?.sunrise).format('hh:mm a')}
                          </small>
                        </div>
                      </div>
                      <div class="sm:w-1/2 px-1">
                        <div class="flex mb-2 justify-between items-center">
                          <span class="font-bold">Sunset</span>
                          <small class="px-2 inline-block">
                            {moment.unix(item?.sunset).format('hh:mm A')}
                          </small>
                        </div>
                      </div>
                      <div class="sm:w-1/2 px-1">
                        <div class="flex mb-2 justify-between items-center">
                          <span class="font-bold">Rain</span>
                          <small class="px-2 inline-block">{item.rain || 0} mm</small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default observer(Home);
