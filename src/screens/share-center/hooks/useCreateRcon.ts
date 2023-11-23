import {useGoogle} from '@src/hooks/google/useGoogle';
import {useNavigation} from '@src/root/navigation/useNavigation';
import {Routes} from '@src/root/router/routes';
import {useCallback} from 'react';
import Toast from 'react-native-toast-message';

export const useCreateRcon = () => {
  const {authenticate} = useGoogle();
  const nav = useNavigation();

  const create = useCallback(async () => {
    try {
      await authenticate();
      nav.global.navigate({
        route: Routes.CreateProject,
        params: {},
      });
    } catch (e) {
      Toast.show({
        text1: 'Unable to authenticate. Please try again later.',
        type: 'error',
      });
    }
  }, [authenticate, nav.global]);
  return {create};
};
