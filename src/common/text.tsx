import React, {FC} from 'react';
import {StyleSheet, Text as Tt, TextProps as TtP} from 'react-native';

export interface TextProps extends TtP {}

export const Text: FC<TextProps> = props => {
  return <Tt {...props} style={[styles.text, props.style]} />;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SF-Pro',
  },
});