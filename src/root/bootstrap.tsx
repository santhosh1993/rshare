import React, {useEffect} from 'react';
import {Providers} from './providers';
import {useAnalytics} from './analytics/useAnalytics';
import {EventKey} from './analytics/analytics.Keys';
import {MatchRoute} from './match-route';
import {Routes} from './router/routes';
import Toast from 'react-native-toast-message';

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
      <MatchRoute route={Routes.HOME} params={{}} />
      <Toast />
    </Providers>
  );
}
