import {ButtonType, Button} from '@common/button';
import {colors} from '@common/colors';
import React, {FC} from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';

export interface SubmitButtonPorps {
  style?: StyleProp<ViewStyle>;
}

export const SubmitButton: FC<SubmitButtonPorps> = props => {
  return (
    <Button
      type={ButtonType.PrimaryButton}
      style={[styles.background, props.style]}
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

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'red',
  },
});
