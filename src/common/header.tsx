import {StyleSheet, StyleProp, View, ViewStyle} from 'react-native';
import React, {FC} from 'react';
import {colors} from '@common/colors';
import {Text} from './text';
import {FontSize} from './font';

interface HeaderProps {
  style?: StyleProp<ViewStyle>;
  title: string;
}

export const Header: FC<HeaderProps> = props => {
  return (
    <View style={[styles.backgroud, props.style]}>
      <View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroud: {
    backgroundColor: colors.app.background,
  },
  header: {
    height: 60,
    justifyContent: 'center',
  },
  title: {
    fontSize: FontSize.xxlarge,
    fontWeight: 'bold',
    color: '#fff',
  },
});
