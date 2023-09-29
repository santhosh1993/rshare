import {EventKey} from '@src/root/analytics/analytics.Keys';
import {useAnalytics} from '@src/root/analytics/useAnalytics';

export const useFirestoreEvents = () => {
  const firestoreError = useAnalytics({
    name: EventKey.FireStoreError,
    params: {
      doc: '',
      type: '',
      error: 
    },
  });

  const firestoreSuccess = useAnalytics({
    name: EventKey.FireStoreSuccess,
    params: {
      doc: '',
      type: '',
    },
  });

  return {firestoreError, firestoreSuccess};
};
