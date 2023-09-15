import React, {memo, FC} from 'react';
import {StyleSheet, View} from 'react-native';

interface NewProjectFabProps {}

export const NewProjectFab: FC<NewProjectFabProps> = memo(props => {
  return <View style={styles.parent} />;
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
