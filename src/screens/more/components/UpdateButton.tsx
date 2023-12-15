import {Button, ButtonType, PrimaryButtonProps} from '@common/button';
import React, {memo} from 'react';

export const UpdateButton = memo(({onPress}:{onPress: () => void}) => {
  const props: PrimaryButtonProps = {
    label: 'Update',
  };

  return <Button type={ButtonType.PrimaryButton} props={props} onPress={onPress}/>;
});
