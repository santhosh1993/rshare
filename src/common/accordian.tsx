import {StyleProp, View, ViewProps, ViewStyle} from 'react-native';
import React from 'react';
import {colors} from './colors';

export interface AccordianInterface extends ViewProps {
  title: string;
  titleStyle?: StyleProp<ViewStyle>;
}

export const Accordian = (props: AccordianInterface) => {
  return (
    <View style={[{backgroundColor: colors.app.cardBackground}, props.style]}>
      {props.children}
    </View>
  );
};
