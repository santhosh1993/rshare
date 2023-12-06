import {FireStoreCollection} from './firestore.collections';
import {FireStoreCollectionShareDocInterface, FireStoreCollectionUsersInterFace} from './firestore.collections.Interface';

export type FirestoreParamsBase = {
  [FireStoreCollection.USERS]: FireStoreCollectionUsersInterFace;
  [FireStoreCollection.RCONDOCS]: FireStoreCollectionShareDocInterface;
};
