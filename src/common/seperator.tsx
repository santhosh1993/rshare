import React, {FC} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {colors} from './colors';

export interface SeperatorProps extends ViewProps {}

export const Seperator: FC<SeperatorProps> = props => {
  return (
    <View
      {...props}
      style={[styles.container, props.style]}
    />
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: colors.app.background, height: 2}
})
