import firestore from '@react-native-firebase/firestore';
import {useCallback} from 'react';
import {FireStoreCollection} from './firestoreCollections';
import {useFirestoreEvents} from './useFirestoreEvents';

export interface CreateUserInterface {
  userId: string;
  name: string;
  phoneNo: string;
}

export const useFireStore = () => {
  const {firestoreError, firestoreSuccess} = useFirestoreEvents();
  const getUserData = useCallback(
    async (userId: string) => {
      try {
        const documentSnapshot = await firestore()
          .collection(FireStoreCollection.USERS)
          .doc(userId)
          .get();
        firestoreSuccess({doc: FireStoreCollection.USERS, type: 'get'});
        return documentSnapshot.data();
      } catch (e) {
        console.log('Error occured', e);
        firestoreError({doc: FireStoreCollection.USERS, type: 'get'});
      }
      return;
    },
    [firestoreError, firestoreSuccess],
  );

  const updateUser = useCallback(
    async ({userId, name, phoneNo}: CreateUserInterface) => {
      try {
        await firestore()
          .collection(FireStoreCollection.USERS)
          .doc(userId)
          .update({name: name, phoneNo: phoneNo});
        firestoreSuccess({
          doc: FireStoreCollection.USERS,
          type: 'update',
        });
      } catch (e) {
        console.log('error on creating the user', e.message);
        firestoreError({doc: FireStoreCollection.USERS, type: 'update'});
      }
    },
    [firestoreError, firestoreSuccess],
  );

  const createUser = useCallback(
    async ({userId, name, phoneNo}: CreateUserInterface) => {
      console.log(userId, '------');
      try {
        const getUser = await getUserData(userId);
        console.log(getUser, '------>>>>');
        if (getUser !== undefined) {
        } else {
          await firestore()
            .collection(FireStoreCollection.USERS)
            .doc(userId)
            .set({name: name, phoneNo: phoneNo});
        }
        firestoreSuccess({
          doc: FireStoreCollection.USERS,
          type: 'set',
        });
      } catch (e) {
        console.log('error on creating the user', e.message);
        firestoreError({
          doc: FireStoreCollection.USERS,
          type: 'set',
        });
      }
    },
    [getUserData, firestoreError, firestoreSuccess],
  );

  return {getUserData, createUser, updateUser};
};
