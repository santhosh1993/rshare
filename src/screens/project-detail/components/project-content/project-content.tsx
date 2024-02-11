import React, {memo, useCallback, useMemo} from 'react';
import {View} from 'react-native';
import {styles} from './project-content.styles';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useProjectDetailStore} from '../../project-detail.store';
import {ProjectSectionContent} from './project-section-content';
import {colors} from '@common/colors';
import {FontWeight, Text} from '@common/text';

const Tab = createMaterialTopTabNavigator();

export const ProjectContent = memo(() => {
  const sections = useProjectDetailStore(s => s.data);

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

  const tabViews = useMemo(() => {
    return (
      <>
        {sections.map((section, index) => {
          return (
            <Tab.Screen
              options={{
                tabBarLabel: tabBarLabel,
                tabBarIndicatorStyle: {
                  height: 2,
                  backgroundColor: colors.text.medium,
                },
              }}
              name={section.title}
              children={() => (
                <ProjectSectionContent data={section} sectionIndex={index} />
              )}
            />
          );
        })}
      </>
    );
  }, [sections]);

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          lazy: true,
          lazyPreloadDistance: 2,
        }}>
        {tabViews}
      </Tab.Navigator>
    </View>
  );
});
