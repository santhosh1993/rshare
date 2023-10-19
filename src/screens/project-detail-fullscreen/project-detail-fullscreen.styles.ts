import {colors} from '@common/colors';
import {window} from '@common/constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  flatList: {flex: 1},
  parentContainer: {flex: 1, backgroundColor: colors.app.background},
  filterItem: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterImage: {width: 24, height: 24},
  renderItemContainer: {width: window.width, height: '100%'},
});
