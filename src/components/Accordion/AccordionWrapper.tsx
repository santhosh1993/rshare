import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {View} from 'react-native';

import {AccordionContext} from './Accordion.context';
import {
  AccordionContextInterface,
  AccordionExpandType,
  AccordionProps,
  AccordionRef,
} from './Accordion.interface';

export const AccordionWrapper = forwardRef<AccordionRef, AccordionProps>(
  (
    {
      children,
      expandType = AccordionExpandType.EXPAND_ALL,
      duration = 200,
      style,
      shouldCloseAll = false,
    },
    ref,
  ) => {
    const [openedItems, setOpenedItems] = useState<Array<number | string>>([]);

    const toggleItemOpen = useCallback(
      (id: number | string) => {
        if (openedItems.includes(id)) {
          if (expandType === 'expandOnlyOne') {
            setOpenedItems([]);
            return;
          }
          setOpenedItems(openedItems.filter(i => i !== id));
          return;
        }
        if (expandType === 'expandOnlyOne') {
          setOpenedItems([id]);
          return;
        }
        setOpenedItems([...openedItems, id]);
      },
      [expandType, openedItems],
    );

    const value = useMemo<AccordionContextInterface>(
      () => ({
        expandType,
        openedItems,
        toggleItemOpen,
        duration,
      }),
      [duration, expandType, openedItems, toggleItemOpen],
    );

    useEffect(() => {
      if (shouldCloseAll) {
        setOpenedItems([]);
      }
    }, [shouldCloseAll]);

    const closeAll = useCallback(() => {
      setOpenedItems([]);
    }, []);

    if (ref) {
      if (typeof ref !== 'function') {
        ref.current = {
          closeAll,
        };
      }
    }

    return (
      <AccordionContext.Provider value={value}>
        <View style={style}>{children}</View>
      </AccordionContext.Provider>
    );
  },
);
