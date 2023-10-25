import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import {LayoutChangeEvent, View} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {AccordionItemContext} from './Accordion.context';
import {AccordionBodyProps} from './Accordion.interface';
import {styles} from './AccordionBody.styles';

export const AccordionBody = ({children, style}: AccordionBodyProps) => {
  const {isOpened, showBodyCallback, duration} =
    useContext(AccordionItemContext);

  const [height, setHeight] = useState<number>(0);
  const offset = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: offset.value,
    };
  });

  const callback = useCallback<(flag: boolean) => void>(
    flag => {
      showBodyCallback && showBodyCallback(flag);
    },
    [showBodyCallback],
  );

  const isMounting = useRef<boolean>(true);
  useEffect(() => {
    if (!isMounting.current) {
      if (!isOpened) {
        offset.value = withTiming(
          0,
          {
            duration,
          },
          () => {
            runOnJS(callback)(false);
          },
        );
      } else {
        offset.value = withTiming(
          height ?? 180,
          {
            duration,
          },
          () => {
            runOnJS(callback)(true);
          },
        );
      }
    } else {
      isMounting.current = false;
    }
  }, [isOpened]); // eslint-disable-line react-hooks/exhaustive-deps

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      setHeight(event.nativeEvent.layout.height);
      if (isOpened) {
        offset.value = withTiming(event.nativeEvent.layout.height, {
          duration,
        });
      }
    },
    [duration, isOpened, offset],
  );

  return (
    <Animated.View style={[styles.animatedView, animatedStyles]}>
      <View onLayout={onLayout} style={[style, styles.view]}>
        {children}
      </View>
    </Animated.View>
  );
};
