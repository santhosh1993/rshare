import {View, ActivityIndicator, StyleSheet, ViewStyle} from 'react-native';
import {border} from './border.styles';
import {colors} from './colors';
import {shadow} from './shadow.styles';
import {Text} from './text';
import React from 'react';

export const Loader = ({title, style}: {title?: string; style?: ViewStyle}) => {
  return (
    <View style={styles.loadingWrapper}>
      <View style={[styles.background, border.card, shadow.container, style]}>
        <ActivityIndicator size="large" color="#222" />
        <Text> {title ? title : 'Loading ...'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingWrapper: {
    backgroundColor: colors.app.opacBackground,
    position: 'absolute',
    bottom: 0,
    top: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 8,
    paddingTop: 12,
  },
});
