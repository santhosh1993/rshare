import {Button, ButtonType} from '@common/button';
import {useGoogle} from '@src/hooks/google/useGoogle';
import {EventKey} from '@src/root/analytics/analytics.Keys';
import {useAnalytics} from '@src/root/analytics/useAnalytics';
import {useNavigation} from '@src/root/navigation/useNavigation';
import {Routes} from '@src/root/router/routes';
import React, {memo, FC, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';

export interface NewProjectFabProps {
  source: string;
}

export const NewProjectFab: FC<NewProjectFabProps> = memo(props => {
  const {authenticate} = useGoogle();
  const nav = useNavigation();
  const createRconFabClicked = useAnalytics({
    name: EventKey.CreateRconFabClicked,
    params: {
      source: props.source,
    },
  });

  const onPress = useCallback(async () => {
    createRconFabClicked();
    try {
      await authenticate();
      nav.global.navigate({
        route: Routes.CreateProject,
        params: {
          name: 'Project 1',
          id: 'asdfsadf',
        },
      });
    } catch (e) {
      console.log(e);
    }
  }, [authenticate, createRconFabClicked, nav.global]);

  return (
    <Button type={ButtonType.Button} onPress={onPress}>
      <View style={styles.parent} />
    </Button>
  );
});

const styles = StyleSheet.create({
  parent: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
});
