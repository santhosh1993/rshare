import React, {FC, memo, useMemo} from 'react';
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
  ViewProps,
} from 'react-native';

export enum ButtonType {
  PrimaryButton,
}

export interface ButtonProps extends ViewProps {
  type: ButtonType;
  props: PrimaryButtonProps;
}

export interface PrimaryButtonProps extends ViewProps {
  feedbackProps?: TouchableWithoutFeedbackProps;
}

export const Button: FC<ButtonProps> = memo(props => {
  const button = useMemo(() => {
    switch (props.type) {
      case ButtonType.PrimaryButton:
        return <PrimaryButton {...props.props} />;
    }
  }, [props]);

  return <View {...props}>{button}</View>;
});

const PrimaryButton: FC<PrimaryButtonProps> = props => {
  return (
    <TouchableWithoutFeedback {...props.feedbackProps}>
      <View
        {...props}
        style={[
          {
            backgroundColor: 'yellow',
            marginHorizontal: 16,
            marginVertical: 12,
            height: 40,
            borderRadius: 4,
          },
          props.style,
        ]}
      />
    </TouchableWithoutFeedback>
  );
};
