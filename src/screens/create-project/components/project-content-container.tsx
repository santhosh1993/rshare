import React, {memo, useCallback, useMemo} from 'react';
import {View} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useCreateProjectStore} from '../create-project.store';
import {styles} from '../create-project.styles';
import {ProjectTabContent} from './project-tab-content';
import {Button, ButtonType} from '@common/button';
import SvgAdd from '@src/generated/assets/svgs/Add';

const Tab = createMaterialTopTabNavigator();

export const ProjectContent = memo(() => {
  const {sections, addNew} = useCreateProjectStore(s => {
    return {sections: s.data, addNew: s.addNewSection};
  });

  const screenOptions = useMemo(() => {
    return {
      tabBarScrollEnabled: true,
      lazy: true,
      lazyPreloadDistance: 2,
      tabBarStyle: styles.tabBar,
    };
  }, []);

  const onAddTap = useCallback(() => {
    addNew();
    //TODO: switch the tab on tabcreation
  }, [addNew]);

  return (
    <View style={styles.container}>
      <Tab.Navigator screenOptions={screenOptions}>
        {sections.map(section => {
          return (
            <Tab.Screen
              name={section.title}
              children={() => <ProjectTabContent index={section.index} />}
            />
          );
        })}
      </Tab.Navigator>
      <Button
        type={ButtonType.Button}
        style={styles.addSectionButton}
        onPress={onAddTap}>
        <SvgAdd style={styles.addSectionImage} />
      </Button>
    </View>
  );
});
