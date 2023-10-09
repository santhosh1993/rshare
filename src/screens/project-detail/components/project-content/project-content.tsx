import React, {memo, useCallback, useMemo} from 'react';
import {View} from 'react-native';
import {styles} from './project-content.styles';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useProjectDetailStore} from '../../project-detail.store';
import {ProjectSectionContent} from './project-section-content';

const Tab = createMaterialTopTabNavigator();

export const ProjectContent = memo(() => {
  const sections = useProjectDetailStore(s => s.data);

  const tabBar = useMemo(() => {}, []);

  const tabViews = useMemo(() => {
    return (
      <>
        {sections.map(section => {
          return (
            <Tab.Screen
              name={section.title + section.title + section.title}
              children={() => <ProjectSectionContent />}
            />
          );
        })}
      </>
    );
  }, [sections]);

  return (
    <View style={styles.container}>
      <Tab.Navigator>{tabViews}</Tab.Navigator>
    </View>
  );
});
