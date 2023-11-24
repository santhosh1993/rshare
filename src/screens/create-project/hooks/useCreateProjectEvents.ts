import {FileOperationType} from '@src/root/analytics/analytics.Interfaces';
import {EventKey} from '@src/root/analytics/analytics.Keys';
import {useAnalytics} from '@src/root/analytics/useAnalytics';

export const useCreateProjectEvents = () => {
  const emitServerFileOperationSuccessEvent = useAnalytics({
    name: EventKey.ServerFileOperationSuccess,
    params: {
      type: FileOperationType.create,
      fileSize: '',
      fileType: '',
      source: '',
    },
  });

  const emitServerFileOperationFailedEvent = useAnalytics({
    name: EventKey.ServerFileOperationFailed,
    params: {
      type: FileOperationType.create,
      fileSize: '',
      fileType: '',
      source: '',
    },
  });

  const emitLocalFileOperationSuccessEvent = useAnalytics({
    name: EventKey.LocalFileOperationSuccess,
    params: {
      type: FileOperationType.create,
      fileSize: '',
      fileType: '',
      source: '',
    },
  });

  const emitLocalFileOperationFailedEvent = useAnalytics({
    name: EventKey.LocalFileOperationFailed,
    params: {
      type: FileOperationType.create,
      fileSize: '',
      fileType: '',
      source: '',
    },
  });

  return {
    emitServerFileOperationSuccessEvent,
    emitServerFileOperationFailedEvent,
    emitLocalFileOperationSuccessEvent,
    emitLocalFileOperationFailedEvent,
  };
};
