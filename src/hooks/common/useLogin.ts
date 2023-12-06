import {useCallback} from 'react';
import {useGoogle} from '../google/useGoogle';
import { updateDefaultProps } from '@src/root/analytics/useAnalytics';
import { FireStoreCollection } from '../firestore/firestore.collections';
import { useFireStore } from '../firestore/usefirestore';

export type SingInData = {
  id: string;
  name: string | null;
  email: string;
  photo: string | null;
  familyName: string | null;
  givenName: string | null;
}

export const useLogin = () => {
  const {authenticate: googleAuth} = useGoogle();
  const {doc} = useFireStore()

  const authenticate = useCallback(async () => {
    try {
      const signInData: SingInData = await googleAuth()
      const userData = await doc(signInData.id, FireStoreCollection.USERS).read()
      if (userData == undefined) {
        await doc(signInData.id, FireStoreCollection.USERS)
        .create<FireStoreCollection.USERS>(
          {
            docData: {
              name: signInData.name ?? "",
              phoneNo: ''
            }
          })
      }
      updateDefaultProps({userId: signInData.id});
    } catch (e) {
      throw e;
    }
  }, []);
  return {authenticate};
};
