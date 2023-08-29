import React, {FC} from 'react';
import {View, ViewProps} from 'react-native';

export interface SeperatorProps extends ViewProps {}

export const Seperator: FC<SeperatorProps> = props => {
  return (
    <View
      {...props}
      style={[{backgroundColor: 'blue', height: 1}, props.style]}
    />
  );
};
