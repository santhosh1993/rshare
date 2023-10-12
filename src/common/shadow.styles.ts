import {StyleSheet} from 'react-native';

export const shadow = StyleSheet.create({
  container: {
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1,
  },
});
