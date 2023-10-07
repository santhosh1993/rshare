import {Header} from '@common/header';
import {SectionList, View} from 'react-native';
import {styles} from './project-detail.styles';
import React, {FC, memo} from 'react';
import {ProjectDetailInterface} from './project-detail.interface';
import {ProjectSharedInfo} from './components/projectSharedInfo';
import {Text} from '@common/text';
import {Routes} from '@src/root/router/routes';
import {withScreenLoadedEvent} from '@src/core/withScreenLoadedEvent';

const ProjectDetail: FC<ProjectDetailInterface> = memo(props => {
  const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];
  return (
    <View style={styles.background}>
      <Header title={props.name} />
      <ProjectSharedInfo {...props} />
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        stickySectionHeadersEnabled={true}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
});

export const ProjectDetailComponent = withScreenLoadedEvent(
  Routes.PROJECTDETAIL,
  ({route: {params}}: {route: {params: ProjectDetailInterface}}) => {
    return <ProjectDetail {...params} />;
  },
);
