import {colors} from '@common/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.app.cardBackground,
    marginHorizontal: 8,
  },
  contentContainer: {flex: 1},
  header: {
    paddingTop: 4,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  shareButton: {width: 24, height: 24, padding: 2},
  shareImage: {width: 20, height: 20},
  descriptionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    padding: 8,
  },
  image: {
    width: 100,
    height: '100%',
    marginRight: 8,
    backgroundColor: colors.app.background,
  },
  description: {
    flex: 1,
    alignItems: 'flex-start',
    height: '100%',
  },
  actionBar: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    height: 28,
    borderTopLeftRadius: 100,
    borderBottomRightRadius: 8,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 8,
    paddingLeft: 16,
    backgroundColor: colors.app.header + '40',
  },
  action: {width: 24, height: 24},
  actionSeperator: {width: 2, height: 10, backgroundColor: '#00000020'},
});
