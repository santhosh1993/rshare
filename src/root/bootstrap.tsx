import React from 'react';
import {IDDetail} from '../id-detail/id-detail';

interface InitParams {
  route?: string;
  params?: Record<string, unknown>;
}

export function BootstrapInner(_: InitParams) {
  return <IDDetail />;
}
