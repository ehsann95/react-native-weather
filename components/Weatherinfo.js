import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '../utils/index';
import LottieView from 'lottie-react-native';
import {weatherConditions} from '../utils/weatherConditions';

const {PRIMARY_COLOR, SECONDARY_COLOR} = colors;

const Weatherinfo = ({currentWeather}) => {
  const {
    main: {temp},
    weather: [details],
    name,
  } = currentWeather;
  const {icon, main, description} = details;
  // const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  let condition = weatherConditions[currentWeather.weather[0].main];
  return (
    <View style={styles.weatherInfo}>
      <Text style={styles.textSecondary}>{name}</Text>
      <LottieView
        style={styles.weatherIcon}
        source={condition.animation}
        autoPlay
        loop
      />
      <Text style={styles.textPrimary}>{temp}°</Text>
      <Text style={styles.weatherDesc}>{description}</Text>
      <Text style={styles.textSecondary}>{main}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: 'center',
  },
  weatherDesc: {
    textTransform: 'capitalize',
  },
  weatherIcon: {
    width: 200,
    height: 200,
  },
  textPrimary: {
    fontSize: 40,
    color: PRIMARY_COLOR,
    marginBottom: 20,
  },
  textSecondary: {
    fontSize: 20,
    color: SECONDARY_COLOR,
    fontWeight: '500',
    marginTop: 10,
  },
});

export default Weatherinfo;
