import {Header} from '@common/header';
import {View} from 'react-native';
import {styles} from './project-detail.styles';
import React, {FC, memo} from 'react';
import {ProjectDetailInterface} from './project-detail.interface';
import {ProjectSharedInfo} from './components/projectSharedInfo';
import {Routes} from '@src/root/router/routes';
import {withScreenLoadedEvent} from '@src/core/withScreenLoadedEvent';
import {ProjectContent} from './components/project-content/project-content';

const ProjectDetail: FC<ProjectDetailInterface> = memo(props => {
  return (
    <View style={styles.background}>
      <Header title={props.name} />
      <ProjectSharedInfo {...props} />
      <ProjectContent />
    </View>
  );
});

export const ProjectDetailComponent = withScreenLoadedEvent(
  Routes.PROJECTDETAIL,
  ({route: {params}}: {route: {params: ProjectDetailInterface}}) => {
    return <ProjectDetail {...params} />;
  },
);
