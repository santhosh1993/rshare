export enum FirestoreOperationType {
  READ = 'read',
  UPDATE = 'update',
  CREATE = 'create',
  DELETE = 'delete',
}

export interface EventAppLaunchedInterface {}

export interface FireStoreErrorInterface {
  doc: string;
  type: FirestoreOperationType;
  error?: Record<string, never>;
}

export interface FireStoreSuccessInterface {
  doc: string;
  type: FirestoreOperationType;
}
