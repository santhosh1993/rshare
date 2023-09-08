import React, {FC} from 'react';
import {Text as Tt, TextProps as TtP} from 'react-native';

export interface TextProps extends TtP {}

export const Text: FC<TextProps> = props => {
  return <Tt {...props} style={[props.style, {fontFamily: 'sans-serif'}]} />;
};
