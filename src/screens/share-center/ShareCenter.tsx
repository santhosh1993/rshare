import React, {FC, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from '@common/header';
import {ProjectListContainer} from './components/project-list-container';
import {Button, ButtonType} from '@common/button';
import SvgNewDoc from '@src/generated/assets/svgs/NewDoc';
import {useCreateRcon} from './hooks/useCreateRcon';

export interface ShareCenterProps {}

export const ShareCenter: FC<ShareCenterProps> = () => {
  const {create} = useCreateRcon();

  const rightBarItem = useMemo(() => {
    return (
      <Button
        type={ButtonType.Button}
        style={styles.creareItem}
        onPress={create}>
        <SvgNewDoc style={styles.createItemImage} fill={'#fff'} />
      </Button>
    );
  }, [create]);

  return (
    <View style={styles.container}>
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
  container: {flex: 1},
  createItemImage: {width: 24, height: 24},
});
