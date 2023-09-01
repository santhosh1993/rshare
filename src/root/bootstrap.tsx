import React from 'react';
import {IDDetail} from '../id-detail/id-detail';
import {Providers} from './providers';

interface InitParams {
  route?: string;
  params?: Record<string, unknown>;
}

export function BootstrapInner(_: InitParams) {
  return (
    <Providers>
      <IDDetail />
    </Providers>
  );
}
