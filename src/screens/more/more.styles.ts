import {colors} from '@common/colors';
import {StyleSheet} from 'react-native';
import {shadow} from '@common/shadow.styles';

export const styles = StyleSheet.create({
  nonLoginParent: {
    backgroundColor: colors.app.conentBackground,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    ...shadow.container,
  },
  moreContainer: {
    backgroundColor: colors.app.background,
    flex: 1,
    justifyContent: 'space-between',
  },
});
