import {useUser} from '@src/hooks/common/useUser';
import {FireStoreCollection} from '@src/hooks/firestore/firestore.collections';
import {useFireStore} from '@src/hooks/firestore/usefirestore';
import {useCallback} from 'react';
import Toast from 'react-native-toast-message';

export const useMore = () => {
  const {userId, userData} = useUser();
  const {doc} = useFireStore();

  const getUserData = useCallback(async () => {
    try {
      const data = await userData();
      return data;
    } catch (e) {
      Toast.show({
        text1: 'Something went wrong. Please try again after sometime.',
        type: 'error',
      });
      return undefined;
    }
  }, []);

  const updateUserData = useCallback(
    async ({name, phoneNo}: {name: string; phoneNo: string}) => {
      try {
        await doc(
          (
            await userId()
          ).id,
          FireStoreCollection.USERS,
        ).update<FireStoreCollection.USERS>({
          docData: {
            name: name,
            phoneNo: phoneNo,
          },
        });

        Toast.show({
          text1: 'Your name and phone number is updated successfully',
          type: 'success',
        });
      } catch (e) {
        Toast.show({
          text1: 'Something went wrong. Please try again after sometime.',
          type: 'error',
        });
      }
    },
    [],
  );

  const validateUserData = useCallback(
    ({
      name,
      phoneNo,
    }: {
      name: string | undefined;
      phoneNo: string | undefined;
    }) => {
      return name !== undefined && phoneNo !== undefined;
    },
    [],
  );

  return {getUserData, updateUserData, validateUserData};
};
