import React, {lazy, Suspense} from 'react';
import {ProjectDetailInterface} from './project-detail.interface';
import {LazyComponentDefaultLoader} from '@src/core/LazyComponentDefaultLoader';
import {LazyComponentProps} from '@src/core/LazyComponentProps';

const LazyProjectDetail = lazy(() =>
  import('./project-detail').then(s => ({
    default: s.ProjectDetailComponent,
  })),
);

export function SuspendedProjectDetailComponent(
  props: LazyComponentProps<ProjectDetailInterface>,
) {
  return (
    <Suspense fallback={<LazyComponentDefaultLoader />}>
      <LazyProjectDetail {...props} />
    </Suspense>
  );
}
