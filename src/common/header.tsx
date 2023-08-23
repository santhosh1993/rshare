import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {colors} from '@common/colors';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return <View style={styles.backgroud} />;
};

const styles = StyleSheet.create({
  backgroud: {
    backgroundColor: colors.app.background,
    height: 40,
  },
});
