import React, {useContext, useEffect} from 'react';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {AccordionItemContext} from './Accordion.context';
import {
  AccordionIconAnimationType,
  AccordionIconProps,
} from './Accordion.interface';

const Rotation = ({children}: {children: React.ReactNode}) => {
  const {isOpened, duration} = useContext(AccordionItemContext);

  const rotation = useSharedValue(0);
  const rotationStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: `${rotation.value}deg`}],
    };
  });

  useEffect(() => {
    if (!isOpened) {
      rotation.value = withTiming(0, {
        duration,
      });
    } else {
      rotation.value = withTiming(180, {
        duration,
      });
    }
  }, [duration, isOpened, rotation]);

  return <Animated.View style={rotationStyle}>{children}</Animated.View>;
};

const ScaleY = ({children}: {children: React.ReactNode}) => {
  const {isOpened, duration} = useContext(AccordionItemContext);

  const scaleY = useSharedValue(1);
  const scaleYStyle = useAnimatedStyle(() => {
    return {
      transform: [{scaleY: scaleY.value}],
    };
  });

  useEffect(() => {
    if (!isOpened) {
      scaleY.value = withTiming(1, {
        duration,
      });
    } else {
      scaleY.value = withTiming(-1, {
        duration,
      });
    }
  }, [duration, isOpened, scaleY]);

  return <Animated.View style={scaleYStyle}>{children}</Animated.View>;
};

export const AccordionIcon = ({
  children,
  animationType,
}: AccordionIconProps) => {
  if (animationType === AccordionIconAnimationType.ROTATION) {
    return <Rotation>{children}</Rotation>;
  }

  if (animationType === AccordionIconAnimationType.SCALE_Y) {
    return <ScaleY>{children}</ScaleY>;
  }

  return null;
};
