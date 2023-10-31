import {Button, ButtonType} from '@common/button';
import React, {memo} from 'react';

export const Save = memo(() => {
  return <Button type={ButtonType.PrimaryButton} props={{label: 'SAVE'}} />;
});
