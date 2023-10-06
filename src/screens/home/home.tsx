import React, {FC} from 'react';
import {View} from 'react-native';
import {NewProjectFabProvider} from '@src/screens/new-project-fab/new-project-fab.provider';
import {Header} from '@common/header';
import {ShareCard} from '@src/components/shareCard/shareCard';

export interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  return (
    <NewProjectFabProvider>
      <View style={{flex: 1}}>
        <Header title="Home" />
        <ShareCard />
      </View>
    </NewProjectFabProvider>
  );
};
