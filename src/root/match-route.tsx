import {NavigationContainer} from '@react-navigation/native';
import {ShareCenter} from '@src/screens/share-center/ShareCenter';
import React from 'react';
import {BaseRouteParams, Routes} from './router/routes';
import {More, MoreInterface} from '@src/screens/more/more';
import {STACK_NAVIGATION_OPTIONS} from './navigation/navigationOptions';
import {createStackNavigator} from '@react-navigation/stack';
import {SuspendedProjectDetailComponent} from '@src/screens/project-detail/project-detail.lazy';
import {SuspendedProjectDetailFullScreenComponent} from '@src/screens/project-detail-fullscreen/project-detail-fullscreen.lazy';
import {SuspendedCreateProjectComponent} from '@src/screens/create-project/create-project.lazy';
import {SuspendedShareProjectFullScreenComponent} from '@src/screens/share-project/share-project.lazy';
import {Home} from '@src/screens/home/home';

const Stack = createStackNavigator();

export function MatchRoute<K extends Routes>(props: {
  route: K;
  params: BaseRouteParams[K];
}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={props.route}
        screenOptions={STACK_NAVIGATION_OPTIONS}>
        <Stack.Screen
          name={Routes.HOME}
          component={Home}
          initialParams={props.params}
        />
        <Stack.Screen
          name={Routes.SHARE_CENTER}
          component={ShareCenter}
          initialParams={props.params}
        />
        <Stack.Screen
          name={Routes.MORE}
          initialParams={props.params as MoreInterface}
          component={More}
        />
        <Stack.Screen
          name={Routes.PROJECTDETAIL}
          initialParams={props.params}
          component={SuspendedProjectDetailComponent}
        />
        <Stack.Screen
          name={Routes.PROJECTDETAILFULLSCREEN}
          initialParams={props.params}
          component={SuspendedProjectDetailFullScreenComponent}
        />
        <Stack.Screen
          name={Routes.CreateProject}
          initialParams={props.params}
          component={SuspendedCreateProjectComponent}
        />
        <Stack.Screen
          name={Routes.SHARE_SCREEN}
          initialParams={props.params}
          component={SuspendedShareProjectFullScreenComponent}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
