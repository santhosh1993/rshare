import {useCallback} from 'react';
import {useLogin} from './useLogin';
import {useFireStore} from '../firestore/usefirestore';
import {FireStoreCollection} from '../firestore/firestore.collections';
import {FireStoreCollectionUsersInterFace} from '../firestore/firestore.collections.Interface';

export const useUser = () => {
  const {getLoginData, authenticate} = useLogin();
  const {doc} = useFireStore();

  const userId = useCallback(async () => {
    try {
      let singInData = getLoginData();
      if (singInData) {
        return singInData;
      }

      singInData = await authenticate();
      return singInData;
    } catch (e) {
      throw e;
    }
  }, [getLoginData, authenticate]);

  const userData = useCallback(async () => {
    try {
      const signInData = await userId();
      const userData = await doc(
        signInData.id,
        FireStoreCollection.USERS,
      ).read();
      if (userData) {
        return userData as FireStoreCollectionUsersInterFace;
      } else {
        throw 'Something went wrong. Please try again later';
      }
    } catch (e) {
      throw e;
    }
  }, [userId, doc]);

  return {userId, userData};
};
