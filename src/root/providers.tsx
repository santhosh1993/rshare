import { colors } from '@common/colors';
import React, {FC} from 'react';
import { StatusBar } from 'react-native';
import {ViewProps} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

interface ProvidersProps extends ViewProps {}

export const Providers: FC<ProvidersProps> = ({children}: ProvidersProps) => {
  return <SafeAreaProvider><StatusBar
  animated={true}
  backgroundColor={colors.app.header}
/>{children}</SafeAreaProvider>;
};
