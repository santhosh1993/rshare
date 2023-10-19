export enum FirestoreOperationType {
  READ = 'read',
  UPDATE = 'update',
  CREATE = 'create',
  DELETE = 'delete',
  UNKNOWN = 'unknown',
}

export interface EventAppLaunchedInterface {}

export interface FireStoreErrorInterface {
  doc: string;
  type: FirestoreOperationType;
  error?: unknown;
}

export interface FireStoreSuccessInterface {
  doc: string;
  type: FirestoreOperationType;
}

export interface CreateRconFabClickedInterface {
  source: string;
}

export interface ScreenLoadedInterface {
  route: string;
}

export interface CreateRconScreenLoaded {}