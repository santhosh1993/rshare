import React, {FC} from 'react';
import {ViewProps} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

interface ProvidersProps extends ViewProps {}

export const Providers: FC<ProvidersProps> = ({children}: ProvidersProps) => {
  return <SafeAreaProvider>{children}</SafeAreaProvider>;
};
