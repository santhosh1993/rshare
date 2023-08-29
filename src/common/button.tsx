import React, {FC, memo, useMemo} from 'react';
import {View} from 'react-native';

export enum ButtonType {
  PrimaryButton,
}

export interface ButtonProps {
  type: ButtonType;
  props: PrimaryButtonProps;
}

export interface PrimaryButtonProps {}

export const Button: FC<ButtonProps> = memo(props => {
  const button = useMemo(() => {
    switch (props.type) {
      case ButtonType.PrimaryButton:
        return <PrimaryButton {...props.props} />;
    }
  }, [props]);

  return (
    <View {...props} style={{backgroundColor: 'red'}}>
      {button}
    </View>
  );
});

const PrimaryButton: FC<PrimaryButtonProps> = props => {
  return (
    <View
      {...props}
      style={{
        backgroundColor: 'yellow',
        marginHorizontal: 16,
        marginVertical: 12,
        height: 40,
        borderRadius: 4,
      }}
    />
  );
};
