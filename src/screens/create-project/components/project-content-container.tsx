import React, {memo, useCallback, useMemo} from 'react';
import {View} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useCreateProjectStore} from '../create-project.store';
import {styles} from '../create-project.styles';
import {ProjectTabContent} from './project-tab-content';
import {Button, ButtonType} from '@common/button';
import SvgAdd from '@src/generated/assets/svgs/Add';
import {FontWeight, Text} from '@common/text';
import {colors} from '@common/colors';

const Tab = createMaterialTopTabNavigator();

export const ProjectContent = memo(() => {
  const {tabs, addNew} = useCreateProjectStore(s => {
    return {tabs: s.tabs, addNew: s.addNewSection};
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

  const tabBarLabel = useCallback(
    (props: {focused: boolean; color: string; children: string}) => {
      return (
        <Text
          style={{
            color: props.focused ? colors.text.bold : colors.text.medium,
          }}
          fontWeight={FontWeight.BOLD}>
          {props.children}
        </Text>
      );
    },
    [],
  );

  return (
    <View style={styles.container}>
      <Tab.Navigator screenOptions={screenOptions}>
        {tabs.map((section, index) => {
          return (
            <Tab.Screen
              options={{
                tabBarLabel: tabBarLabel,
                tabBarIndicatorStyle: {
                  height: 2,
                  backgroundColor: colors.text.medium,
                },
              }}
              name={section}
              children={() => <ProjectTabContent index={index} />}
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
