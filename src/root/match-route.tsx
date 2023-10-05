import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '@src/screens/home/home';
import React from 'react';
import {BaseRouteParams, Routes} from './router/routes';
import {More} from '@src/screens/more/more';
import {SlideInRight} from 'react-native-reanimated';

const Stack = createNativeStackNavigator();

export function MatchRoute<K extends Routes>(props: {
  route: K;
  params: BaseRouteParams[K];
}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={props.route}
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
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
