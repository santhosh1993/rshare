import React, {FC} from 'react';
import {View} from 'react-native';
import {NewProjectFabProvider} from '@src/screens/new-project-fab/new-project-fab.provider';

export interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  return (
    <NewProjectFabProvider>
      <View style={{flex: 1, backgroundColor: 'red'}} />
    </NewProjectFabProvider>
  );
};
