import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

interface ProvidersProps {
  children: React.ReactElement;
}

export function Providers({children}: ProvidersProps) {
  return <SafeAreaProvider>{children}</SafeAreaProvider>;
}
