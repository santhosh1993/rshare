export interface FireStoreCollectionUsersInterFace {
  name: string;
  phoneNo: string;
}

export interface FireStoreCollectionShareDocInterface {
  userId: string;
  docId: string;
  sourceUserId: string;
}

export interface FireStoreCollectionUserCreatedDocInterface {
  configUrl: string;
  rconId: string;
}
