import {NavigationContainer} from '@react-navigation/native';
import {Home} from '@src/screens/home/home';
import React from 'react';
import {BaseRouteParams, Routes} from './router/routes';
import {More, MoreInterface} from '@src/screens/more/more';
import {
  BOTTOM_SHEET_NAVIGATION_OPTIONS,
  STACK_NAVIGATION_OPTIONS,
} from './navigation/navigationOptions';
import {createStackNavigator} from '@react-navigation/stack';
import {SuspendedProjectDetailComponent} from '@src/screens/project-detail/project-detail.lazy';
import {SuspendedProjectDetailFullScreenComponent} from '@src/screens/project-detail-fullscreen/project-detail-fullscreen.lazy';

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
          name={Routes.MORE}
          initialParams={props.params as MoreInterface}
          component={More}
        />
        <Stack.Screen
          name={Routes.PROJECTDETAIL}
          initialParams={props.params}
          component={SuspendedProjectDetailComponent}
        />
        <Stack.Group screenOptions={BOTTOM_SHEET_NAVIGATION_OPTIONS}>
          <Stack.Screen
            name={Routes.PROJECTDETAILFULLSCREEN}
            initialParams={props.params}
            component={SuspendedProjectDetailFullScreenComponent}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
