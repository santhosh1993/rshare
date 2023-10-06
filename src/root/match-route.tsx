import {NavigationContainer} from '@react-navigation/native';
import {Home} from '@src/screens/home/home';
import React from 'react';
import {BaseRouteParams, Routes} from './router/routes';
import {More} from '@src/screens/more/more';
import {STACK_NAVIGATION_OPTIONS} from './navigation/navigationOptions';
import {createStackNavigator} from '@react-navigation/stack';

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
          component={More}
          initialParams={props.params}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
