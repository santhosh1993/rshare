import React, {FC} from 'react';
import {View} from 'react-native';
import {NewProjectFabProvider} from '@src/screens/new-project-fab/new-project-fab.provider';
import {Header} from '@common/header';
import {ProjectListContainer} from './components/project-list-container';

export interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  return (
    <NewProjectFabProvider>
      <View style={{flex: 1}}>
        <Header title="Home" hideBackButton={true} />
        <ProjectListContainer />
      </View>
    </NewProjectFabProvider>
  );
};
