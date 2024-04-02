import React, {lazy, Suspense} from 'react';
import {LazyComponentDefaultLoader} from '@src/core/LazyComponentDefaultLoader';
import {LazyComponentProps} from '@src/core/LazyComponentProps';
import {TextInputOverlayInterface} from './text-input-overlay.interface';

const LazyTextInputOverlayComponent = lazy(() =>
  import('./text-input-overlay').then(s => ({
    default: s.TextInputOverlayComponent,
  })),
);

export function SuspendedTextInputOverlayComponent(
  props: LazyComponentProps<TextInputOverlayInterface>,
) {
  return (
    <Suspense fallback={<LazyComponentDefaultLoader />}>
      <LazyTextInputOverlayComponent {...props} />
    </Suspense>
  );
}
