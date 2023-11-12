import {
  BaseToast,
  BaseToastProps,
  ErrorToast,
} from 'react-native-toast-message';
import React from 'react';

export const toastConfig = {
  success: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
    <BaseToast {...props} text1NumberOfLines={2} text2NumberOfLines={2} />
  ),
  error: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
    <ErrorToast {...props} text1NumberOfLines={2} text2NumberOfLines={2} />
  ),
};
