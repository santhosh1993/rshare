import React from 'react';
import {Providers} from './providers';
import {Home} from '../home/home';

interface InitParams {
  route?: string;
  params?: Record<string, unknown>;
}

export function BootstrapInner(_: InitParams) {
  return (
    <Providers>
      <Home />
    </Providers>
  );
}
