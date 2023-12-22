export enum FirestoreOperationType {
  read = 'read',
  update = 'update',
  create = 'create',
  delete = 'delete',
  unknown = 'unknown',
}

export enum FileOperationType {
  read = 'read',
  update = 'update',
  create = 'create',
  delete = 'delete',
  accessChange = 'AccessChange',
  downloadLink = 'downloadLink',
  unknown = 'unknown',
}

export enum LocalFileOperatioonType {
  read = 'read',
  update = 'update',
  create = 'create',
  delete = 'delete',
  unknown = 'unknown',
}

export enum CreateProjectInteractedType {
  back = 'back',
  addCategory = 'addCategory',
  addFile = 'addFile',
  deleteFile = 'deleteFile',
  projectDescription = 'projectDescription',
  projectTitle = 'projectTitle',
  projectKeyWords = 'projectKeyWords',
  categoryTitle = 'categoryTitle',
  categoryDescription = 'categoryDescription',
}

export enum ViewProjectInteractedType {
  back = 'back',
  fileTap = 'fileTap',
  categoryTap = 'categoryTap',
  callTap = 'callTap',
  shareTap = 'shareTap',
  editTap = 'editTap',
}

interface BaseParamsInterface {
  source: string;
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

export interface CreateRconScreenLoadedInterface extends BaseParamsInterface {}

export interface ServerFileOperationSuccessInterface
  extends BaseParamsInterface {
  type: FileOperationType;
  fileSize: string;
  fileType: string;
}

export interface ServerFileOperationFailedInterface
  extends BaseParamsInterface {
  type: FileOperationType;
  fileSize?: string;
  fileType: string;
}

export interface LocalFileOperationSuccessInterface
  extends BaseParamsInterface {
  type: FileOperationType;
  fileSize?: string;
  fileType: string;
}

export interface LocalFileOperationFailed extends BaseParamsInterface {
  type: LocalFileOperatioonType;
  fileSize: string;
  fileType: string;
}

export interface CreateProjectInteractedInterface extends BaseParamsInterface {
  type: CreateProjectInteractedType;
}

export interface ViewProjectInteractedInterface extends BaseParamsInterface {
  type: ViewProjectInteractedType;
}

export interface CreateProjectFadInteractedInterface
  extends BaseParamsInterface {}

export interface LocalStorageInValidRCONInterface extends BaseParamsInterface {
  rconId: string
  type?: string
}

export interface LocalStorageErrorInterface extends BaseParamsInterface {
  errorMessage: unknown
  data?: Record<string, any>
  type?: string
}