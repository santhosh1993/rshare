import {Platform} from 'react-native';

import {DefaultTheme} from '@react-navigation/native';
import {
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack';

import {forHorizontalIOS} from '@react-navigation/stack/src/TransitionConfigs/CardStyleInterpolators';
import {customSlideTransition} from './customTransition';

export const STACK_NAVIGATION_OPTIONS: StackNavigationOptions = {
  headerMode: 'screen',
  headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
  cardStyleInterpolator: Platform.select({
    default: forHorizontalIOS,
    android: customSlideTransition,
  }),
  cardStyle: {
    backgroundColor: DefaultTheme.colors.background,
  },
};

export const BOTTOM_SHEET_NAVIGATION_OPTIONS: StackNavigationOptions = {
  headerShown: false,
  cardStyle: {backgroundColor: 'transparent'},
  cardOverlayEnabled: true,
  presentation: 'transparentModal',
  cardStyleInterpolator: ({
    current: {progress},
    layouts: {
      screen: {height},
    },
  }) => ({
    cardStyle: {
      transform: [
        {
          translateY: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [height, 0],
          }),
        },
      ],
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
      }),
    },
  }),
};
