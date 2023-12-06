export interface FireStoreCollectionUsersInterFace {
  name: string;
  phoneNo: string;
}

export interface FireStoreCollectionShareDocInterface {
  userId: string;
  configUrl: string;
  sourceUserId?: string;
}
