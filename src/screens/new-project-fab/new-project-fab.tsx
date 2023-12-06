import {Button, ButtonType} from '@common/button';
import {colors} from '@common/colors';
import SvgNewDoc from '@src/generated/assets/svgs/NewDoc';
import { useLogin } from '@src/hooks/common/useLogin';
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
  const {authenticate} = useLogin();
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
      <View style={styles.parent}>
        <SvgNewDoc style={{width: 28, height: 28}} />
      </View>
    </Button>
  );
});

const styles = StyleSheet.create({
  parent: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    width: 60,
    height: 60,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.app.header,
  },
});
