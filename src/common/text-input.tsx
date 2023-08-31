import React, {FC} from 'react';
import {
  StyleSheet,
  TextInput as TI,
  TextInputProps as TIP,
  View,
  ViewProps,
} from 'react-native';
import {Text, TextProps} from '@common/text';
import {colors} from '@common/colors';

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
    <View style={[styles.parent, style]}>
      <Text {...textProps}>{label}</Text>
      <TI {...inputBarProps} style={[styles.ti, inputBarProps?.style]} />
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {paddingHorizontal: 10, marginVertical: 5},
  ti: {
    backgroundColor: colors.app.textFieldBackground,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.border.light,
    minHeight: 40,
  },
});
