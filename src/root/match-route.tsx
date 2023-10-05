import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '@src/screens/home/home';
import React from 'react';
import {BaseRouteParams, Routes} from './router/routes';

const Stack = createNativeStackNavigator();

export function MatchRoute<K extends Routes>(props: {
  route: K;
  params: BaseRouteParams[K];
}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={props.route}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={Routes.HOME}
          component={Home}
          initialParams={props.params}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
