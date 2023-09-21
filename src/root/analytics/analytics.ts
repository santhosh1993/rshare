import {EventAppLaunchedInterface} from './analytics.Interfaces';
import {EventKey} from './analytics.Keys';
import {EventsProvider} from './analytics.provider';

export type EventsParamsBase = {
  [EventKey.AppLaunched]: EventAppLaunchedInterface;
};

export type EventParams<K extends EventKey> = {
  name: K;
  params: EventsParamsBase[K];
  activeScreenName?: string;
  providers?: Array<EventsProvider>;
};
