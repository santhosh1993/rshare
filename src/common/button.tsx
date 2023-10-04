import React, {FC, memo, useMemo} from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
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
}

export interface PrimaryButtonProps extends ViewProps {
  label?: string;
}

export interface ButtonWithArrowProps extends ViewProps {
  label?: string;
}

type ButtonParams = {
  [ButtonType.PrimaryButton]: PrimaryButtonProps;
  [ButtonType.ButtonWithArrow]: ButtonWithArrowProps;
};

export interface ButtonProps<K extends ButtonType> {
  type: K;
  props: ButtonParams[K];
  feedbackProps?: TouchableWithoutFeedbackProps;
}

export const Button = memo(<K extends ButtonType>(props: ButtonProps<K>) => {
  const btnView = useMemo(() => {
    switch (props.type) {
      case ButtonType.PrimaryButton:
        return <PrimaryButton {...props.props} />;
      case ButtonType.ButtonWithArrow:
        return <ButtonWithArrow {...props.props} />;
      default:
        return <></>;
    }
  }, [props]);
  return (
    <TouchableWithoutFeedback {...props.feedbackProps}>
      {btnView}
    </TouchableWithoutFeedback>
  );
});

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
