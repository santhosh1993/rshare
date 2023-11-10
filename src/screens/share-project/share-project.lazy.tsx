import React, {lazy, Suspense} from 'react';
import {LazyComponentDefaultLoader} from '@src/core/LazyComponentDefaultLoader';
import {LazyComponentProps} from '@src/core/LazyComponentProps';
import {ShareProjectInterface} from './share-project.interface';

const LazyShareProjectFullScreen = lazy(() =>
  import('./share-project').then(s => ({
    default: s.ShareProject,
  })),
);

export function SuspendedShareProjectFullScreenComponent(
  props: LazyComponentProps<ShareProjectInterface>,
) {
  return (
    <Suspense fallback={<LazyComponentDefaultLoader />}>
      <LazyShareProjectFullScreen {...props.route.params} />
    </Suspense>
  );
}
