import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import {useCallback, useRef} from 'react';
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
  docId: string | undefined;
  docType: K;
  docData: FirestoreParamsBase[K];
};

export const useFireStore = () => {
  const {firestoreError, firestoreSuccess} = useFirestoreEvents();
  const document = useRef<FirebaseFirestoreTypes.DocumentReference<FirebaseFirestoreTypes.DocumentData> | undefined>(undefined)
  const documentType = useRef<FireStoreCollection | undefined>(undefined)
  const doc = useCallback((docId: string | undefined, docType: FireStoreCollection) => {
    document.current = (document.current ?? firestore()).collection(docType).doc(docId)
    documentType.current = docType
    return {doc, create, read, update};
  }, []);

  const read = useCallback(
    async () => {
      try {
        if (document.current === undefined) {
          throw ("Please create doc object")
        }
        const documentSnapshot = await document.current?.get();
        firestoreSuccess({doc: documentType.current, type: FirestoreOperationType.read});
        return documentSnapshot.data();
      } catch (e) {
        console.log('Error while reading the data', e);
        firestoreError({
          doc: documentType.current,
          type: FirestoreOperationType.read,
          error: e,
        });
        throw Error('Something went wrong');
      }
    },
    [doc, firestoreError, firestoreSuccess],
  );

  const update = useCallback(
    async <K extends FireStoreCollection>({
      docData,
    }: FireStoreUpdateDocInfo<K>) => {
      try {
        if (document.current === undefined) {
          throw ("Please create doc object")
        }

        await document.current.update({...docData});
        firestoreSuccess({
          doc: documentType.current,
          type: FirestoreOperationType.update,
        });
      } catch (e) {
        console.log('error on creating the user', e);
        firestoreError({
          doc: documentType.current,
          type: FirestoreOperationType.update,
          error: e,
        });
      }
    },
    [doc, firestoreError, firestoreSuccess],
  );

  const create = useCallback(
    async <K extends FireStoreCollection>({
      docData,
    }: FireStoreCreateDocInfo<K>) => {
      try {
        if (document.current === undefined) {
          throw ("Please create doc object")
        }

        await document.current.set({...docData});
        firestoreSuccess({
          doc: documentType.current,
          type: FirestoreOperationType.create,
        });
      } catch (e) {
        console.log('error on creating data', e);
        firestoreError({
          doc: documentType.current,
          type: FirestoreOperationType.create,
          error: e,
        });
      }
    },
    [doc, firestoreError, firestoreSuccess],
  );

  return {doc};
};
