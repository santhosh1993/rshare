import React, {useEffect} from 'react';
import {Providers} from './providers';
import {Home} from '../home/home';
import {useAnalytics} from './analytics/useAnalytics';
import {EventKey} from './analytics/analytics.Keys';

interface InitParams {
  route?: string;
  params?: Record<string, unknown>;
}

export function BootstrapInner(_: InitParams) {
  const appLaunched = useAnalytics({name: EventKey.AppLaunched, params: {}});

  useEffect(() => {
    appLaunched();
  });

  return (
    <Providers>
      <Home />
    </Providers>
  );
}
