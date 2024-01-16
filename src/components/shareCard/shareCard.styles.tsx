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
  shareImage: {width: 20, height: 20},
  descriptionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    padding: 8,
  },
  description: {
    flex: 1,
    alignItems: 'flex-start',
    height: '100%',
  },
  actionBar: {
    width: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  actionButton: {
    width: 30,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  action: {width: 24, height: 24},
  actionSeperator: {width: 2, height: 10, backgroundColor: '#00000020'},
  imageContainer: {height: 200},
  canvas: {flex: 1},
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  shareContainer: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    top: 0,
    left: 0,
    height: 35,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  shareButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: '#00000040',
    paddingHorizontal: 8,
  },
  userInfo: {flexShrink: 1},
  rconDescription: {
    padding: 8,
    flexShrink: 1
  },
  rconUserText: {color: 'white'}
});
