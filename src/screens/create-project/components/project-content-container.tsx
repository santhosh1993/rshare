import React, {memo, useMemo} from 'react';
import {View} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useCreateProjectStore} from '../create-project.store';
import {styles} from '../create-project.styles';
import {ProjectTabContent} from './project-tab-content';
import {Button, ButtonType} from '@common/button';
import SvgAdd from '@src/generated/assets/svgs/Add';

const Tab = createMaterialTopTabNavigator();

export const ProjectContent = memo(() => {
  const sections = useCreateProjectStore(s => s.data);

  const tabViews = useMemo(() => {
    return (
      <>
        {sections.map(section => {
          return (
            <Tab.Screen
              name={section.title}
              children={() => <ProjectTabContent />}
            />
          );
        })}
      </>
    );
  }, [sections]);

  const screenOptions = useMemo(() => {
    return {
      tabBarScrollEnabled: true,
      lazy: true,
      lazyPreloadDistance: 2,
      tabBarStyle: styles.tabBar,
    };
  }, []);

  return (
    <View style={styles.container}>
      <Tab.Navigator screenOptions={screenOptions}>{tabViews}</Tab.Navigator>
      <Button type={ButtonType.Button} style={styles.addSectionButton}>
        <SvgAdd style={styles.addSectionImage} />
      </Button>
    </View>
  );
});
