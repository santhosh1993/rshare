import {FireStoreCollection} from './firestore.collections';
import {FireStoreCollectionShareDocInterface, FireStoreCollectionUserCreatedDocInterface, FireStoreCollectionUsersInterFace} from './firestore.collections.Interface';

export type FirestoreParamsBase = {
  [FireStoreCollection.USERS]: FireStoreCollectionUsersInterFace;
  [FireStoreCollection.SHARED_DOCS]: FireStoreCollectionShareDocInterface;
  [FireStoreCollection.USER_CREATED_DOCS]: FireStoreCollectionUserCreatedDocInterface;
};
