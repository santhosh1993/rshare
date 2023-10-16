import React, {FC, memo, useMemo} from 'react';
import {
  Pressable,
  StyleSheet,
  TouchableWithoutFeedbackProps,
  View,
  ViewProps,
} from 'react-native';
import {FontWeight, Text} from './text';
import SvgChevronRight from '@src/generated/assets/svgs/ChevronRight';
import {shadow} from './shadow.styles';
import {colors} from './colors';

export enum ButtonType {
  PrimaryButton,
  ButtonWithArrow,
  RightBarItem,
  Button,
}

export interface PrimaryButtonProps extends ViewProps {
  label?: string;
}

export interface ButtonWithArrowProps extends ViewProps {
  label?: string;
}

export interface RightBarItemProps extends ViewProps {
  child?: React.ReactNode;
}

type ButtonParams = {
  [ButtonType.PrimaryButton]: PrimaryButtonProps;
  [ButtonType.ButtonWithArrow]: ButtonWithArrowProps;
  [ButtonType.Button]: {};
  [ButtonType.RightBarItem]: RightBarItemProps;
};

export interface ButtonProps<K extends ButtonType>
  extends TouchableWithoutFeedbackProps {
  type: K;
  props?: ButtonParams[K];
}

export const Button = memo(<K extends ButtonType>(props: ButtonProps<K>) => {
  const btnView = useMemo(() => {
    switch (props.type) {
      case ButtonType.PrimaryButton:
        return <PrimaryButton {...props.props} />;
      case ButtonType.ButtonWithArrow:
        return <ButtonWithArrow {...props.props} />;
      case ButtonType.RightBarItem:
        return <RightBarItem {...props.props} />;
      default:
        return <>{props.children}</>;
    }
  }, [props]);
  return <Pressable {...props}>{btnView}</Pressable>;
});

const RightBarItem: FC<RightBarItemProps> = props => {
  return (
    <View style={[rightBarItemStyles.contaner, props.style]}>
      {props.child}
    </View>
  );
};

const ButtonWithArrow: FC<ButtonWithArrowProps> = props => {
  return (
    <View style={[buttonArrowStyles.backGround, props.style]}>
      <Text fontWeight={FontWeight.BOLD}>{props.label}</Text>
      <SvgChevronRight style={buttonArrowStyles.image} fill={'#1a1a1a'} />
    </View>
  );
};

const PrimaryButton: FC<PrimaryButtonProps> = props => {
  return (
    <View
      {...props}
      style={[primaryButtonStyles.container, shadow.container, props.style]}>
      <Text fontWeight={FontWeight.BOLD} style={{color: colors.text.light}}>
        {props.label}
      </Text>
    </View>
  );
};

const rightBarItemStyles = StyleSheet.create({
  contaner: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const primaryButtonStyles = StyleSheet.create({
  container: {
    backgroundColor: '#429f34',
    marginHorizontal: 16,
    marginVertical: 12,
    height: 40,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const buttonArrowStyles = StyleSheet.create({
  backGround: {
    height: 40,
    justifyContent: 'space-between',
    padding: 4,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {},
  image: {
    width: 16,
    height: 16,
  },
});
