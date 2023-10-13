import {StyleSheet, StyleProp, View, ViewStyle} from 'react-native';
import React, {FC, useCallback} from 'react';
import {colors} from '@common/colors';
import {Text} from './text';
import {FontSize} from './font';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@src/root/navigation/useNavigation';
import {shadow} from './shadow.styles';

interface HeaderProps {
  style?: StyleProp<ViewStyle>;
  title: string;
}

export const Header: FC<HeaderProps> = props => {
  const {top} = useSafeAreaInsets();
  const nav = useNavigation();
  const onBackPress = useCallback(() => {
    nav.global.goBack();
  }, [nav]);

  return (
    <View
      style={[
        styles.backgroud,
        props.style,
        {paddingTop: top},
        shadow.container,
      ]}>
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
