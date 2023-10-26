import React, {FC} from 'react';
import {StyleSheet, Text as Tt, TextProps as TtP} from 'react-native';
import {colors} from './colors';

export interface TextProps extends TtP {
  fontWeight?: FontWeight;
}

export enum FontWeight {
  BOLD,
  MEDIUM,
  NORMAL,
}

export const Text: FC<TextProps> = props => {
  return (
    <Tt
      {...props}
      style={[
        styles.text,
        getFontFamilyStyle(props.fontWeight ?? FontWeight.NORMAL),
        props.style,
      ]}
    />
  );
};

export function getFontFamilyStyle(fontWeight: FontWeight) {
  switch (fontWeight) {
    case FontWeight.BOLD:
      return styles.bold;
    case FontWeight.MEDIUM:
      return styles.medium;
    case FontWeight.NORMAL:
      return styles.normal;
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SF-Pro',
    color: colors.text.medium,
  },
  bold: {
    fontFamily: 'SF-Pro-Display-Bold',
    color: colors.text.bold,
  },
  medium: {
    fontFamily: 'SF-Pro-Display-Medium',
  },
  normal: {
    fontFamily: 'SF-Pro-Display-Regular',
  },
});
