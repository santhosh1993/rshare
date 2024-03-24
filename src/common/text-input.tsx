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
import { Button, ButtonType } from './button';
import { useNavigation } from '@src/root/navigation/useNavigation';
import { Routes } from '@src/root/router/routes';

export interface TextInputProps extends ViewProps {
  inputBarProps?: TIP;
  textProps?: TextProps;
  label?: string;
  editInPlace?: boolean
}

export const TextInput: FC<TextInputProps> = (props) => {
  const {
    style,
    inputBarProps,
    textProps,
    label,
    editInPlace
  } = props
  const {global} = useNavigation()

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

  const onTIPress = useCallback(() => {
    global.navigate({route: Routes.TEXT_INPUT_OVERLAY, params:{...props}})
  }, [global])

  return (
    <View style={[styles.parent, style]}>
      <Text {...textProps} style={[styles.label, textProps?.style]}>
        {label}
      </Text>
      <TI
        {...inputBarProps}
        style={[styles.ti, inputBarProps?.style]}
        onChangeText={editInPlace ? onChangeText : undefined}
      />
      {inputBarProps?.maxLength && (
        <Text style={styles.maxlength}>
          {textLength} / {inputBarProps?.maxLength}
        </Text>
      )}
      {!editInPlace && 
            <Button type={ButtonType.Button} onPress={onTIPress} style={styles.tiOverlayButton}/> }

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
  tiOverlayButton: {
    ...StyleSheet.absoluteFillObject
  }
});
