import {useCallback} from 'react';
import {useGoogle} from '../google/useGoogle';
import {updateDefaultProps} from '@src/root/analytics/useAnalytics';
import {FireStoreCollection} from '../firestore/firestore.collections';
import {useFireStore} from '../firestore/usefirestore';
import {useLocalStorage} from './useLocalStorage';
import {FireStoreCollectionUserCreatedDocInterface} from '../firestore/firestore.collections.Interface';

export type SingInData = {
  id: string;
  name: string | null;
  email: string;
  photo: string | null;
  familyName: string | null;
  givenName: string | null;
};

let loginData: SingInData | null = null;

export const useLogin = () => {
  const {authenticate: googleAuth} = useGoogle();
  const {doc} = useFireStore();
  const {storeRcon, storeLoginData} = useLocalStorage({source: 'login'});

  const getLoginData = useCallback(() => {
    return loginData;
  }, []);

  const getUserRcons = useCallback(
    async (userId: string) => {
      const sharedDocs = await doc(userId, FireStoreCollection.USERS)
        .document.collection(FireStoreCollection.USER_CREATED_DOCS)
        .get();

      sharedDocs.forEach(doc => {
        const data = doc.data() as FireStoreCollectionUserCreatedDocInterface;
        storeRcon({rconId: data.rconId});
      });
    },
    [doc, storeLoginData, storeLoginData, storeRcon],
  );

  const authenticate = useCallback(
    async ({dontFetchRCON}: {dontFetchRCON?: boolean}) => {
      try {
        const signInData: SingInData = await googleAuth();
        const userData = await doc(
          signInData.id,
          FireStoreCollection.USERS,
        ).read();
        if (userData === undefined) {
          await doc(
            signInData.id,
            FireStoreCollection.USERS,
          ).create<FireStoreCollection.USERS>({
            docData: {
              name: signInData.name ?? '',
              phoneNo: '',
            },
          });
        }
        storeLoginData(signInData);
        if (!dontFetchRCON) {
          await getUserRcons(signInData.id);
        }
        updateDefaultProps({userId: signInData.id});
        loginData = signInData;
        return signInData;
      } catch (e) {
        throw e;
      }
    },
    [doc, getUserRcons, googleAuth, storeLoginData],
  );

  return {authenticate, getLoginData};
};
