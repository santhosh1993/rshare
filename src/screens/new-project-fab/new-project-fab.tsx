import {useGoogle} from '@src/hooks/google/useGoogle';
import {useNavigation} from '@src/root/navigation/useNavigation';
import {Routes} from '@src/root/router/routes';
import React, {memo, FC, useCallback} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';

interface NewProjectFabProps {}

export const NewProjectFab: FC<NewProjectFabProps> = memo(props => {
  const {createFolder} = useGoogle();
  const nav = useNavigation();
  const onPress = useCallback(() => {
    nav.global.navigate({route: Routes.MORE, params: {}});
  }, [nav]);
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.parent} />
    </TouchableWithoutFeedback>
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
