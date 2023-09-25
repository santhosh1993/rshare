import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import {useCallback} from 'react';
import {FireStoreCollection} from './firestoreCollections';

export interface CreateUserInterface {
  userId: string;
  name: string;
  phoneNo: string;
}

export const useFireStore = () => {
  const getUserData = useCallback(async (userId: string) => {
    try {
      const documentSnapshot = await firestore()
        .collection(FireStoreCollection.USERS)
        .doc(userId)
        .get();

      return documentSnapshot.data();
    } catch (e) {
      console.log('Error occured', e);
    }
    return;
  }, []);

  const createUser = useCallback(
    async ({userId, name, phoneNo}: CreateUserInterface) => {
      console.log(userId, '------');
      try {
        // const getUser = await getUserData(userId);
        // if (getUser !== undefined) {
        // } else {
        await firestore()
          .collection(FireStoreCollection.USERS)
          .doc(userId)
          .set({name: name, phoneNo: phoneNo});
        //}
      } catch (e) {
        console.log('error on creating the user', e.message);
      }
    },
    [getUserData],
  );

  return {getUserData, createUser};
};
