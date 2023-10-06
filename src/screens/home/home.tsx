import React, {FC} from 'react';
import {View} from 'react-native';
import {NewProjectFabProvider} from '@src/screens/new-project-fab/new-project-fab.provider';
import {Header} from '@common/header';

export interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  return (
    <NewProjectFabProvider>
      <View style={{flex: 1}}>
        <Header title="Home" />
      </View>
    </NewProjectFabProvider>
  );
};
