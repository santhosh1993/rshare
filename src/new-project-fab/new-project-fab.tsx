import {useGoogle} from '@src/hooks/google/useGoogle';
import React, {memo, FC, useCallback} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';

interface NewProjectFabProps {}

export const NewProjectFab: FC<NewProjectFabProps> = memo(props => {
  const {authenticate} = useGoogle();
  const onPress = useCallback(() => {
    console.log('--->>>');
    authenticate();
  }, []);
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
