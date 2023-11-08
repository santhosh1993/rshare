import React, { FC } from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

interface ProvidersProps {
  
}

export const Providers: FC<ProvidersProps> = ({children}: ProvidersProps) {
  return <SafeAreaProvider>{children}</SafeAreaProvider>;
}
