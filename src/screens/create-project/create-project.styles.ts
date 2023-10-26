import {colors} from '@common/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.app.cardBackground,
    marginTop: 8,
  },
  addSectionImage: {
    width: 24,
    height: 24,
  },
  addSectionButton: {
    backgroundColor: colors.app.cardBackground,
    position: 'absolute',
    right: 0,
    top: 0,
    width: 40,
    height: 56,
    zIndex: 2,
    justifyContent: 'center',
  },
  tabBar: {
    marginRight: 40,
    elevation: 0,
    shadowOffset: {width: 0, height: 0},
  },
});
