import {
  CreateProjectFadInteractedInterface,
  CreateProjectInteractedInterface,
  CreateRconFabClickedInterface,
  CreateRconScreenLoadedInterface,
  EventAppLaunchedInterface,
  FireStoreErrorInterface,
  FireStoreSuccessInterface,
  LocalFileOperationSuccessInterface,
  ScreenLoadedInterface,
  ServerFileOperationFailedInterface,
  ServerFileOperationSuccessInterface,
  ViewProjectInteractedInterface,
} from './analytics.Interfaces';
import {EventKey} from './analytics.Keys';
import {EventsProvider} from './analytics.provider';

export type EventsParamsBase = {
  [EventKey.AppLaunched]: EventAppLaunchedInterface;
  [EventKey.FireStoreError]: FireStoreErrorInterface;
  [EventKey.FireStoreSuccess]: FireStoreSuccessInterface;
  [EventKey.CreateRconFabClicked]: CreateRconFabClickedInterface;
  [EventKey.ScreenLoaded]: ScreenLoadedInterface;
  [EventKey.CreateRconScreenLoaded]: CreateRconScreenLoadedInterface;
  [EventKey.ServerFileOperationSuccess]: ServerFileOperationSuccessInterface;
  [EventKey.ServerFileOperationFailed]: ServerFileOperationFailedInterface;
  [EventKey.LocalFileOperationSuccess]: LocalFileOperationSuccessInterface;
  [EventKey.LocalFileOperationFailed]: LocalFileOperationSuccessInterface;
  [EventKey.CreateProjectInteracted]: CreateProjectInteractedInterface;
  [EventKey.ViewProjectInteracted]: ViewProjectInteractedInterface;
  [EventKey.CreateProjectFadInteracted]: CreateProjectFadInteractedInterface;
};

export type EventParams<K extends EventKey> = {
  name: K;
  params: EventsParamsBase[K];
  activeScreenName?: string;
  providers?: Array<EventsProvider>;
};
