import {FC} from 'react';
import {StyleSheet, View} from 'react-native';

export interface ErrorInterface {
  onRetry?: () => void;
}

export const ErrorView: FC<ErrorInterface> = _ => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'red'},
});
