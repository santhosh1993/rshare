import {FileOperationType} from '@src/root/analytics/analytics.Interfaces';
import {EventKey} from '@src/root/analytics/analytics.Keys';
import {useAnalytics} from '@src/root/analytics/useAnalytics';

export const useGoogleDriveEvents = () => {
  const onDriveAPISuccess = useAnalytics({
    name: EventKey.ServerFileOperationSuccess,
    params: {
      type: FileOperationType.unknown,
      fileSize: '',
      fileType: '',
      source: '',
    },
  });

  const onDriveAPIFailure = useAnalytics({
    name: EventKey.ServerFileOperationFailed,
    params: {
      type: FileOperationType.unknown,
      fileType: '',
      source: '',
    },
  });

  return {onDriveAPISuccess, onDriveAPIFailure};
};
