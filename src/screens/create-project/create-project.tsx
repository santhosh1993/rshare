import {withScreenLoadedEvent} from '@src/core/withScreenLoadedEvent';
import {Routes} from '@src/root/router/routes';
import {View} from 'react-native';
import React from 'react';
import {CreateProjectInterface} from './create-project.interface';
import {Header} from '@common/header';
import {ProjectDetailsInput} from './components/project-details-input';
import {ProjectContent} from './components/project-content-container';

const CreateProject = () => {
  return (
    <View style={{flex: 1}}>
      <Header title="Create RCON" />
      <ProjectDetailsInput />
      <ProjectContent />
    </View>
  );
};

export const CreateProjectCompomnent = withScreenLoadedEvent(
  Routes.CreateProject,
  ({route: {params}}: {route: {params: CreateProjectInterface}}) => {
    return <CreateProject {...params} />;
  },
);
