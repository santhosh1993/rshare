import React, {FC} from 'react';
import {
  TextInput as TI,
  TextInputProps as TIP,
  View,
  ViewProps,
} from 'react-native';
import {Text, TextProps} from './text';

interface TextInputProps extends ViewProps {
  inputBarProps?: TIP;
  textProps?: TextProps;
}

export const TextInput: FC<TextInputProps> = ({
  style,
  inputBarProps,
  textProps,
}) => {
  return (
    <View style={style}>
      <Text {...textProps}>asdasasd asd assa asd ad</Text>
      <TI {...inputBarProps} />
    </View>
  );
};
