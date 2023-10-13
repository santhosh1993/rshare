import React, {lazy, Suspense} from 'react';
import {LazyComponentDefaultLoader} from '@src/core/LazyComponentDefaultLoader';
import {LazyComponentProps} from '@src/core/LazyComponentProps';
import {ProjectDetailFullScreenInterface} from './project-detail-fullscreen.interface';

const LazyProjectDetailFullScreen = lazy(() =>
  import('./project-detail-fullscreen').then(s => ({
    default: s.ProjectDetailFullScreenComponent,
  })),
);

export function SuspendedProjectDetailFullScreenComponent(
  props: LazyComponentProps<ProjectDetailFullScreenInterface>,
) {
  return (
    <Suspense fallback={<LazyComponentDefaultLoader />}>
      <LazyProjectDetailFullScreen {...props} />
    </Suspense>
  );
}
