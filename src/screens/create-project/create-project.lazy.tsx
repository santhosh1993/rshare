import React, {lazy, Suspense} from 'react';
import {LazyComponentDefaultLoader} from '@src/core/LazyComponentDefaultLoader';
import {LazyComponentProps} from '@src/core/LazyComponentProps';
import {CreateProjectInterface} from './create-project.interface';

const LazyCreateProject = lazy(() =>
  import('./create-project').then(s => ({
    default: s.CreateProjectCompomnent,
  })),
);

export function SuspendedCreateProjectComponent(
  props: LazyComponentProps<CreateProjectInterface>,
) {
  return (
    <Suspense fallback={<LazyComponentDefaultLoader />}>
      <LazyCreateProject {...props} />
    </Suspense>
  );
}
