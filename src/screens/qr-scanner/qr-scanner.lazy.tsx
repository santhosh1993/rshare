import React, {lazy, Suspense} from 'react';
import {LazyComponentDefaultLoader} from '@src/core/LazyComponentDefaultLoader';
import {LazyComponentProps} from '@src/core/LazyComponentProps';
import {QRScannerInterface} from './qr-scanner.interfaces';

const LazyQRScannerFullScreen = lazy(() =>
  import('./qr-scanner').then(s => ({
    default: s.QRScanner,
  })),
);

export function SuspendedQRScanner(
  props: LazyComponentProps<QRScannerInterface>,
) {
  return (
    <Suspense fallback={<LazyComponentDefaultLoader />}>
      <LazyQRScannerFullScreen {...props} />
    </Suspense>
  );
}
