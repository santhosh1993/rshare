import {
  BottomSheetBackdropProps,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import React, {memo} from 'react';

export const renderBackdrop = memo((props: BottomSheetBackdropProps) => {
  return (
    <BottomSheetBackdrop
      opacity={0.8}
      {...props}
      pressBehavior="close"
      disappearsOnIndex={-1}
      appearsOnIndex={0}
    />
  );
});
