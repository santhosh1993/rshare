import {StyleSheet, StyleProp, View, ViewStyle} from 'react-native';
import React, {FC, useCallback} from 'react';
import {colors} from '@common/colors';
import {Text} from './text';
import {FontSize} from './font';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@src/root/navigation/useNavigation';
import {shadow} from './shadow.styles';
import {Button, ButtonType} from './button';
import SvgBackButton from '@src/generated/assets/svgs/BackButton';

interface HeaderProps {
  style?: StyleProp<ViewStyle>;
  title: string;
  rightBarItem?: React.ReactNode;
  hideBackButton?: boolean;
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
        {!(props.hideBackButton ?? false) && (
          <Button
            type={ButtonType.Button}
            style={styles.backButton}
            onPress={onBackPress}>
            <SvgBackButton style={styles.backButtonImage} />
          </Button>
        )}
        <Text style={styles.title}>{props.title}</Text>
        {props.rightBarItem && (
          <View style={styles.rightBarItem}>{props.rightBarItem}</View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroud: {
    backgroundColor: colors.app.header,
  },
  header: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  androidHeader: {
    height: 56,
    paddingLeft: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: FontSize.xlarge,
    fontWeight: 'bold',
    color: '#fff',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: 56,
    width: 40,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonImage: {
    width: 24,
    height: 24,
  },
  rightBarItem: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    top: 0,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
