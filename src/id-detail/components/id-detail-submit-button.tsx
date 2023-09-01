import {ButtonType, Button} from '@common/button';
import React, {FC} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export interface SubmitButtonPorps {
  style?: StyleProp<ViewStyle>;
}

export const SubmitButton: FC<SubmitButtonPorps> = props => {
  return (
    <Button
      type={ButtonType.PrimaryButton}
      style={[{backgroundColor: 'red'}, props.style]}
      props={{
        style: {backgroundColor: 'black'},
        feedbackProps: {
          onPress: () => {
            console.log('testrs e');
          },
        },
      }}
    />
  );
};
