import React, {FC} from 'react';
import {View} from 'react-native';
import {NewProjectFabProvider} from '@src/new-project-fab/new-project-fab.provider';

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  return (
    <NewProjectFabProvider>
      <View style={{flex: 1, backgroundColor: 'red'}} />
    </NewProjectFabProvider>
  );
};
