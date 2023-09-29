import analytics from '@react-native-firebase/analytics';
import {useCallback, useEffect, useRef} from 'react';
import {EventParams, EventsParamsBase} from './analytics';
import {EventKey} from './analytics.Keys';
import {EventsProvider} from './analytics.provider';

interface DefaultProps {
  userId: string;
}

let defaultProps: DefaultProps = {
  userId: '',
};

export const updateDefaultProps = (props: Partial<DefaultProps>) => {
  defaultProps = {
    ...defaultProps,
    ...props,
  };
};

export const useAnalytics = <K extends EventKey>({
  name,
  params,
  providers,
}: EventParams<K>) => {
  // Save this in a ref so that the returned callback doesn't change
  // on every invocation
  const paramsRef = useRef(params);
  useEffect(() => {
    paramsRef.current = params;
  }, [params]);

  const sendFireBaseEvent = useCallback(
    async ({name, params}: EventParams<K>) => {
      await analytics().logEvent(name, {
        ...params,
        defaultProps: defaultProps,
      });
    },
    [],
  );

  return useCallback(
    (overrides?: Partial<EventsParamsBase[K]>) => {
      (providers ?? [EventsProvider.firebase]).forEach(provider => {
        switch (provider) {
          case EventsProvider.firebase:
            sendFireBaseEvent({
              name,
              params: {...paramsRef.current, ...(overrides ?? {})},
            });
        }
      });
    },
    [name, providers, sendFireBaseEvent],
  );
};
