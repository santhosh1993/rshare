import {createContext} from 'react';

import {
  AccordionContextInterface,
  AccordionExpandType,
  AccordionItemContextInterface,
} from './Accordion.interface';

export const AccordionContext = createContext<AccordionContextInterface>({
  expandType: AccordionExpandType.EXPAND_ALL,
  openedItems: [],
  toggleItemOpen: null,
  duration: 100,
});

export const AccordionItemContext =
  createContext<AccordionItemContextInterface>({
    toggleBody: () => {},
    duration: 100,
    isOpened: false,
    id: Math.random(),
  });
