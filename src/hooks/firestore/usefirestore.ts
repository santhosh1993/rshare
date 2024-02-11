import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {useCallback, useRef} from 'react';
import {useFirestoreEvents} from './useFirestoreEvents';
import {FirestoreParamsBase} from './firestore.params';
import {FireStoreCollection} from './firestore.collections';
import {FirestoreOperationType} from '@src/root/analytics/analytics.Interfaces';

type FireStoreUpdateDocInfo<K extends FireStoreCollection> = {
  docData: Partial<FirestoreParamsBase[K]>;
};

type FireStoreCreateDocInfo<K extends FireStoreCollection> = {
  docData: FirestoreParamsBase[K];
};

export const useFireStore = () => {
  const {firestoreError, firestoreSuccess} = useFirestoreEvents();
  const document = useRef<
    | FirebaseFirestoreTypes.DocumentReference<FirebaseFirestoreTypes.DocumentData>
    | undefined
  >(undefined);
  const documentType = useRef<FireStoreCollection | undefined>(undefined);

  const getDoc = useCallback(() => {
    const doc = document.current;
    document.current = undefined;
    if (doc === undefined) {
      throw 'Please create doc object';
    }
    return doc;
  }, [document]);

  const read = useCallback(async () => {
    try {
      const documentSnapshot = await getDoc().get();
      firestoreSuccess({
        doc: documentType.current,
        type: FirestoreOperationType.read,
      });
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
  }, [firestoreError, firestoreSuccess, getDoc]);

  const update = useCallback(
    async <K extends FireStoreCollection>({
      docData,
    }: FireStoreUpdateDocInfo<K>) => {
      try {
        await getDoc().update({...docData});
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
    [firestoreError, firestoreSuccess, getDoc],
  );

  const create = useCallback(
    async <K extends FireStoreCollection>({
      docData,
    }: FireStoreCreateDocInfo<K>) => {
      try {
        await getDoc().set({...docData});
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
    [firestoreError, firestoreSuccess, getDoc],
  );

  const doc = useCallback(
    (docId: string | undefined, docType: FireStoreCollection) => {
      document.current = (document.current ?? firestore())
        .collection(docType)
        .doc(docId);
      documentType.current = docType;
      return {data: document.current, doc, create, read, update};
    },
    [create, read, update],
  );

  return {doc};
};
