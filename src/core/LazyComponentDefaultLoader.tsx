import React from 'react';

import {View, StyleSheet, ActivityIndicator} from 'react-native';

export function LazyComponentDefaultLoader() {
  return (
    <View style={styles.loadingWrapper}>
      <ActivityIndicator size="large" color="#111" />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
