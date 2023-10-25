import React from 'react';

import {StyleProp, ViewProps, ViewStyle} from 'react-native';

export enum AccordionExpandType {
  EXPAND_ALL = 'expandAll',
  EXPAND_ONLY_ONE = 'expandOnlyOne',
}

export enum AccordionIconAnimationType {
  ROTATION = 'rotation',
  SCALE_Y = 'scaleY',
}

export interface AccordionContextInterface {
  expandType: AccordionExpandType;
  openedItems: Array<number | string>;
  toggleItemOpen: null | ((id: string | number) => void);
  duration: number;
}

export interface AccordionItemContextInterface {
  toggleBody: () => void;
  duration: number;
  isOpened: boolean;
  id: string | number;
  showBodyCallback?: (showBody: boolean) => void;
}

export interface AccordionProps {
  children: React.ReactNode;
  expandType?: AccordionExpandType;
  duration?: number;
  style?: ViewProps['style'];
  shouldCloseAll?: boolean;
}

export interface AccordionItemProps {
  children: React.ReactNode;
  showBodyCallback?: (showBody: boolean, id: number | string) => void;
  duration?: number;
  id: number | string;
  initialExpand?: boolean;
  style?:
    | StyleProp<ViewStyle>
    | ((isExpanded: boolean) => StyleProp<ViewStyle>);
}

export interface AccordionHeadProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  disable?: boolean;
  onPress?: () => void;
}

export interface AccordionBodyProps {
  children: React.ReactNode;
  style?: StyleProp<Omit<ViewStyle, 'position'>>;
}

export interface AccordionIconProps {
  children: React.ReactNode;
  animationType: AccordionIconAnimationType;
}

type FunctionalComponent<T> = (props: T) => JSX.Element | null;

export type AccordionRef =
  | {
      closeAll: () => void;
    }
  | undefined;

export type AccordionHeadRef =
  | {
      press: () => void;
    }
  | undefined;

export type AccordionComponent = React.ForwardRefExoticComponent<
  AccordionProps & React.RefAttributes<AccordionRef>
> & {
  Item: FunctionalComponent<AccordionItemProps>;
  Head: React.ForwardRefExoticComponent<
    AccordionHeadProps & React.RefAttributes<AccordionHeadRef>
  >;
  Body: FunctionalComponent<AccordionBodyProps>;
  Icon: FunctionalComponent<AccordionIconProps>;
};
