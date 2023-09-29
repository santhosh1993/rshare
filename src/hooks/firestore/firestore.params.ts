import {FireStoreCollection} from './firestore.collections';
import {FireStoreCollectionUsersInterFace} from './firestore.collections.Interface';

export type FirestoreParamsBase = {
  [FireStoreCollection.USERS]: FireStoreCollectionUsersInterFace;
};
