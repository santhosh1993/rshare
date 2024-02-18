import firestore from '@react-native-firebase/firestore';
import {useCallback} from 'react';
import {FirestoreParamsBase} from './firestore.params';
import {FireStoreCollection} from './firestore.collections';
import { FireStoreBuilder } from './firestoreBuilder';

export type FireStoreUpdateDocInfo<K extends FireStoreCollection> = {
  docData: Partial<FirestoreParamsBase[K]>;
};

export type FireStoreCreateDocInfo<K extends FireStoreCollection> = {
  docData: FirestoreParamsBase[K];
};

export const useFireStore = () => {
  const doc = useCallback(
    (docId: string | undefined, docType: FireStoreCollection) => {
      return new FireStoreBuilder(firestore().collection(docType).doc(docId))
    },
    [],
  );

  return {doc};
};