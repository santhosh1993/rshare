import {Button, ButtonType, ButtonWithArrowProps} from '@common/button';
import {colors} from '@common/colors';
import {shadow} from '@common/shadow.styles';
import React, {memo, useMemo} from 'react';

export const FeedBackButton = memo(() => {
  const buttonProps: ButtonWithArrowProps = useMemo(() => {
    return {
      label: 'Feedback',
      style: {
        marginBottom: 24,
        backgroundColor: colors.app.cardBackground,
        ...shadow.container,
        marginHorizontal: 8,
        borderRadius: 4,
      },
    };
  }, []);
  return <Button type={ButtonType.ButtonWithArrow} props={buttonProps} />;
});
