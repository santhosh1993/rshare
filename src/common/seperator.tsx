import React, {FC} from 'react';
import {View, ViewProps} from 'react-native';
import {colors} from './colors';

export interface SeperatorProps extends ViewProps {}

export const Seperator: FC<SeperatorProps> = props => {
  return (
    <View
      {...props}
      style={[{backgroundColor: colors.app.background, height: 2}, props.style]}
    />
  );
};
