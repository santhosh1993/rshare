import firestore from '@react-native-firebase/firestore';
import {useCallback} from 'react';
import {useFirestoreEvents} from './useFirestoreEvents';
import {FirestoreParamsBase} from './firestore.params';
import {FireStoreCollection} from './firestore.collections';
import {FirestoreOperationType} from '@src/root/analytics/analytics.Interfaces';

type FireStoreUpdateDocInfo<K extends FireStoreCollection> = {
  docId: string;
  docType: K;
  docData: Partial<FirestoreParamsBase[K]>;
};

type FireStoreCreateDocInfo<K extends FireStoreCollection> = {
  docId: string;
  docType: K;
  docData: FirestoreParamsBase[K];
};

export const useFireStore = () => {
  const {firestoreError, firestoreSuccess} = useFirestoreEvents();

  const doc = useCallback((docId: string, docType: FireStoreCollection) => {
    const document = firestore().collection(docType).doc(docId);
    return document;
  }, []);

  const read = useCallback(
    async (docId: string, docType: FireStoreCollection) => {
      try {
        const documentSnapshot = await doc(docId, docType).get();
        firestoreSuccess({doc: docType, type: FirestoreOperationType.READ});
        return documentSnapshot.data();
      } catch (e) {
        console.log('Error occured', e);
        firestoreError({doc: docType, type: FirestoreOperationType.READ});
        throw Error('Something went wrong');
      }
    },
    [doc, firestoreError, firestoreSuccess],
  );

  const update = useCallback(
    async <K extends FireStoreCollection>({
      docId,
      docType,
      docData,
    }: FireStoreUpdateDocInfo<K>) => {
      try {
        await doc(docId, docType).update({...docData});
        firestoreSuccess({
          doc: docType,
          type: FirestoreOperationType.UPDATE,
        });
      } catch (e) {
        console.log('error on creating the user', e.message);
        firestoreError({doc: docType, type: FirestoreOperationType.UPDATE});
      }
    },
    [doc, firestoreError, firestoreSuccess],
  );

  const create = useCallback(
    async <K extends FireStoreCollection>({
      docId,
      docType,
      docData,
    }: FireStoreCreateDocInfo<K>) => {
      try {
        await doc(docId, docType).set({...docData});
        firestoreSuccess({
          doc: FireStoreCollection.USERS,
          type: FirestoreOperationType.CREATE,
        });
      } catch (e) {
        console.log('error on creating data', e.message);
        firestoreError({
          doc: FireStoreCollection.USERS,
          type: FirestoreOperationType.CREATE,
        });
      }
    },
    [doc, firestoreError, firestoreSuccess],
  );

  return {create, update, read};
};
