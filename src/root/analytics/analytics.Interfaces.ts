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

export interface CreateRconScreenLoaded extends BaseParamsInterface {}

export interface ServerFileOperationSuccessInterface
  extends BaseParamsInterface {
  type: FileOperationType;
  fileSize: string;
  fileType: string;
}

export interface ServerFileOperationFailed extends BaseParamsInterface {
  type: FileOperationType;
  fileSize?: string;
  fileType: string;
}

export interface LocalFileOperationSuccess extends BaseParamsInterface {
  type: FileOperationType;
  fileSize?: string;
  fileType: string;
}

export interface LocalFileOperationFailed extends BaseParamsInterface {
  type: LocalFileOperatioonType;
  fileSize: string;
  fileType: string;
}

export interface CreateProjectInteracted extends BaseParamsInterface {
  type: CreateProjectInteractedType;
}

export interface ViewProjectInteracted extends BaseParamsInterface {
  type: ViewProjectInteractedType;
}

export interface CreateProjectFadInteracted extends BaseParamsInterface {}
