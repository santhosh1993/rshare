import {StyleSheet, StyleProp, View, ViewStyle} from 'react-native';
import React, {FC} from 'react';
import {colors} from '@common/colors';

interface HeaderProps {
  style?: StyleProp<ViewStyle>;
}

export const Header: FC<HeaderProps> = props => {
  return (
    <View style={[styles.backgroud, props.style]}>
      <View style={styles.header} />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroud: {
    backgroundColor: colors.app.background,
  },
  header: {
    height: 60,
  },
});
