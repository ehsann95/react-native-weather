import sun from '../assets/lottie/sunny.json';
import cloud from '../assets/lottie/clouds.json';
import fog from '../assets/lottie/foggy.json';
import snow from '../assets/lottie/snow.json';
import storm from '../assets/lottie/storm.json';
import wind from '../assets/lottie/windy.json';

export const weatherConditions = {
  Rain: {
    color: '#005BEA',
    title: 'Raining',
    subtitle: 'Get a cup of coffee',
    icon: 'weather-rainy',
    animation: storm,
  },
  Clear: {
    color: '#f7b733',
    title: 'So Sunny',
    subtitle: 'It is hurting my eyes',
    icon: 'weather-sunny',
    animation: sun,
  },
  Thunderstorm: {
    color: '#616161',
    title: 'A Storm is coming',
    subtitle: 'Because Gods are angry',
    icon: 'weather-lightning',
    animation: storm,
  },
  Clouds: {
    color: '#1F1C2C',
    title: 'Clouds',
    subtitle: 'Everywhere',
    icon: 'weather-cloudy',
    animation: cloud,
  },

  Snow: {
    color: '#00d2ff',
    title: 'Snow',
    subtitle: 'Get out and build a snowman for me',
    icon: 'weather-snowy',
    animation: snow,
  },
  Drizzle: {
    color: '#076585',
    title: 'Drizzle',
    subtitle: 'Partially raining...',
    icon: 'weather-hail',
    animation: cloud,
  },
  Haze: {
    color: '#66A6FF',
    title: 'Haze',
    subtitle: 'Another name for Partial Raining',
    icon: 'weather-hail',
    animation: wind,
  },
  Mist: {
    color: '#3CD3AD',
    title: 'Mist',
    subtitle: "Don't roam in forests!",
    icon: 'weather-fog',
    animation: fog,
  },
};
