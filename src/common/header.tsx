import {StyleSheet, StyleProp, View, ViewStyle} from 'react-native';
import React, {FC} from 'react';
import {colors} from '@common/colors';
import {Text} from './text';
import {FontSize} from './font';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface HeaderProps {
  style?: StyleProp<ViewStyle>;
  title: string;
}

export const Header: FC<HeaderProps> = props => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={[styles.backgroud, props.style, {paddingTop: top}]}>
      <View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroud: {
    backgroundColor: colors.app.header,
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: FontSize.xlarge,
    fontWeight: 'bold',
    color: '#fff',
  },
});
