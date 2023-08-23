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
  label?: string;
}

export const TextInput: FC<TextInputProps> = ({
  style,
  inputBarProps,
  textProps,
  label,
}) => {
  return (
    <View style={style}>
      <Text {...textProps}>{label}</Text>
      <TI {...inputBarProps} />
    </View>
  );
};
