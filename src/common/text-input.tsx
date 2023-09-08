import React, {FC, useCallback, useState} from 'react';
import {
  StyleSheet,
  TextInput as TI,
  TextInputProps as TIP,
  View,
  ViewProps,
} from 'react-native';
import {Text, TextProps} from '@common/text';
import {colors} from '@common/colors';
import {FontSize} from './font';

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
  const [textLength, setTextLength] = useState(
    inputBarProps?.value?.length ?? 0,
  );
  const onChangeText = useCallback(
    (text: string) => {
      setTextLength(text.length);
      inputBarProps?.onChangeText?.(text);
    },
    [inputBarProps],
  );

  return (
    <View style={[styles.parent, style]}>
      <Text {...textProps} style={[styles.label, textProps?.style]}>
        {label}
      </Text>
      <TI
        {...inputBarProps}
        style={[styles.ti, inputBarProps?.style]}
        onChangeText={onChangeText}
      />
      {inputBarProps?.maxLength && (
        <Text style={styles.maxlength}>
          {textLength} / {inputBarProps?.maxLength}
        </Text>
      )}
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
  label: {
    fontWeight: 'bold',
    fontSize: FontSize.medium,
  },
  maxlength: {
    fontSize: FontSize.small,
    alignSelf: 'flex-end',
    paddingRight: 4,
  },
});
