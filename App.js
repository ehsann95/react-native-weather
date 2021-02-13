import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
  StatusBar,
  PermissionsAndroid,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import {API_KEY} from './openweather';
import Weatherinfo from './components/Weatherinfo';
import UnitsPicker from './components/UnitsPicker';
import {colors} from './utils/index';
import Reload from './components/Reload';
import WeatherDetails from './components/WeatherDetails';

const App = () => {
  const [errMsg, setErrMsg] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [unitSystem, setUnitSystem] = useState('metric');

  useEffect(() => {
    getLocation();
    // load();
  }, [unitSystem]);

  const getLocation = async () => {
    console.log('getting location');
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message: 'ReactNativeCode App needs access to your location ',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

    if (granted) {
      Geolocation.getCurrentPosition(
        (location) => {
          console.log(location.coords);
          let {latitude, longitude} = location.coords;
          console.log('Coords', latitude, longitude);
          load(latitude, longitude);
        },
        (err) => {
          console.log(err);
          setErrMsg(err.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } else {
      setErrMsg('Permission needed');
      console.log('DEnied');
    }
  };

  const load = async (latitude, longitude) => {
    setCurrentWeather(null);
    setErrMsg(null);
    try {
      if ('granted' == PermissionsAndroid.RESULTS.GRANTED) {
        console.log('GRANTED');
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unitSystem}&appid=${API_KEY}`;
        const response = await fetch(weatherUrl);
        const result = await response.json();

        if (response.ok) {
          setCurrentWeather(result);
          console.log('WEATHER', currentWeather);
        } else {
          setErrMsg(result.message);
        }
      } else {
        console.log('location needed');
        setErrMsg('Location Access Needed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (currentWeather) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <View style={styles.main}>
          <UnitsPicker unitSystem={unitSystem} setUnitSystem={setUnitSystem} />
          <Reload load={getLocation} />
          <Weatherinfo currentWeather={currentWeather} />
        </View>
        <WeatherDetails
          currentWeather={currentWeather}
          unitSystem={unitSystem}
        />
      </View>
    );
  } else if (errMsg) {
    return (
      <View style={styles.container}>
        <Reload load={getLocation} />
        <Text style={{textAlign: 'center'}}>{errMsg}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.PRIMARY_COLOR} />
        <Text>{errMsg}</Text>
      </View>
    );
  }

  // return (
  //   <View style={styles.container}>
  //     <View style={styles.main}>
  //       <UnitsPicker unitSystem={unitSystem} setUnitSystem={setUnitSystem} />
  //       <Reload load={load} />
  //     </View>
  //   </View>
  // );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
