import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';

import {View} from 'react-native';

import {AccordionContext, AccordionItemContext} from './Accordion.context';
import {AccordionItemProps} from './Accordion.interface';

export const AccordionItem = ({
  children,
  showBodyCallback,
  duration,
  id,
  initialExpand = false,
  style,
}: AccordionItemProps) => {
  const {
    openedItems,
    toggleItemOpen,
    duration: accordionDuration,
  } = useContext(AccordionContext);
  const isFirstRender = useRef<boolean>(true);
  const isExpanded = isFirstRender.current
    ? initialExpand
    : openedItems.includes(id);
  isFirstRender.current = false;

  useEffect(() => {
    if (initialExpand && !openedItems.includes(id)) {
      toggleItemOpen?.(id);
    }
  }, [initialExpand]); // eslint-disable-line react-hooks/exhaustive-deps
  const showBodyCallbackOverload = useCallback(
    (isShowing: boolean) => showBodyCallback?.(isShowing, id),
    [id, showBodyCallback],
  );

  const value = useMemo(
    () => ({
      toggleBody: () => toggleItemOpen?.(id),
      isOpened: isExpanded,
      id,
      duration: duration ?? accordionDuration,
      showBodyCallback: showBodyCallbackOverload,
    }),
    [
      accordionDuration,
      duration,
      id,
      isExpanded,
      showBodyCallbackOverload,
      toggleItemOpen,
    ],
  );

  return (
    <AccordionItemContext.Provider value={value}>
      <View style={typeof style === 'function' ? style?.(isExpanded) : style}>
        {children}
      </View>
    </AccordionItemContext.Provider>
  );
};
