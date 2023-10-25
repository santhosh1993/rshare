import React, {useContext, useCallback, forwardRef} from 'react';

import {TouchableWithoutFeedback, View} from 'react-native';

import {AccordionItemContext} from './Accordion.context';
import {AccordionHeadProps, AccordionHeadRef} from './Accordion.interface';

export const AccordionHead = forwardRef<AccordionHeadRef, AccordionHeadProps>(
  ({disable, children, style, onPress}, ref) => {
    const {toggleBody} = useContext(AccordionItemContext);
    const handleOnPress = useCallback(() => {
      if (disable) {
        return;
      } else {
        toggleBody();
        onPress?.();
      }
    }, [disable, onPress, toggleBody]);

    if (ref) {
      if (typeof ref !== 'function') {
        ref.current = {
          press: handleOnPress,
        };
      }
    }

    return (
      <TouchableWithoutFeedback onPress={handleOnPress} accessible={false}>
        <View style={style}>{children}</View>
      </TouchableWithoutFeedback>
    );
  },
);
