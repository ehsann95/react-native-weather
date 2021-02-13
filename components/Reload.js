import React from 'react';
import {View, Platform, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../utils/index';

export default function Reload({load}) {
  const iconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh';
  return (
    <View style={styles.reloadIcon}>
      <Icon
        name={iconName}
        size={24}
        color={colors.PRIMARY_COLOR}
        onPress={load}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  reloadIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});
