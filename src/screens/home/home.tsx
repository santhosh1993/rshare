import React, {FC, useCallback, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from '@common/header';
import {ProjectListContainer} from './components/project-list-container';
import {Button, ButtonType} from '@common/button';
import SvgNewDoc from '@src/generated/assets/svgs/NewDoc';
import {useGoogle} from '@src/hooks/google/useGoogle';
import {Routes} from '@src/root/router/routes';
import {useNavigation} from '@src/root/navigation/useNavigation';
import Toast from 'react-native-toast-message';

export interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  const {authenticate} = useGoogle();
  const nav = useNavigation();

  const onCreateDoc = useCallback(async () => {
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
      Toast.show({
        text1: 'Unable to authenticate. Please try again later.',
        type: 'error',
        props: {
          text1NumberOfLines: 2,
        },
      });
    }
  }, [authenticate, nav.global]);

  const rightBarItem = useMemo(() => {
    return (
      <Button
        type={ButtonType.Button}
        style={styles.creareItem}
        onPress={onCreateDoc}>
        <SvgNewDoc style={styles.createItemImage} fill={'#fff'} />
      </Button>
    );
  }, [onCreateDoc]);

  return (
    <View style={{flex: 1}}>
      <Header title="Home" hideBackButton={true} rightBarItem={rightBarItem} />
      <ProjectListContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  creareItem: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createItemImage: {width: 24, height: 24},
});
