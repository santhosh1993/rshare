import React, {FC, memo} from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export enum ShadowDirection {
  Top,
  Bottom,
  Left,
  Right,
}

export interface ShadowProps {
  type: ShadowDirection;
  color: string;
}

export const Shadow: FC<ShadowProps> = memo(props => {
  let style = styles.topshadow;
  switch (props.type) {
    case ShadowDirection.Top:
      style = styles.topshadow;
  }
  return (
    <LinearGradient
      colors={[`${props.color}00`, props.color + '30']}
      style={style}
    />
  );
});

const styles = StyleSheet.create({
  topshadow: {
    position: 'absolute',
    bottom: 0,
    height: 20,
    left: 0,
    right: 0,
  },
});
