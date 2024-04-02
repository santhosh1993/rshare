import {withScreenLoadedEvent} from '@src/core/withScreenLoadedEvent';
import {Routes} from '@src/root/router/routes';
import React, {useCallback} from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import {TextInputOverlayInterface} from './text-input-overlay.interface';
import {useNavigation} from '@src/root/navigation/useNavigation';
import {Button, ButtonType} from '@common/button';
import {TextInput} from '@common/text-input';

const TextInputOverlay = (props: TextInputOverlayInterface) => {
  const {global} = useNavigation();
  const onPress = useCallback(() => {
    global.goBack();
  }, [global]);
  return (
    <View style={styles.container}>
      <Button
        type={ButtonType.Button}
        onPress={onPress}
        style={styles.backdrop}>
        <View style={styles.backdrop} />
      </Button>
      <KeyboardAvoidingView>
        <View style={{backgroundColor: '#fff'}}>
          <TextInput {...props} editInPlace={true} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  backdrop: {backgroundColor: '#00000010', flex: 1},
});

export const TextInputOverlayComponent = withScreenLoadedEvent(
  Routes.TEXT_INPUT_OVERLAY,
  ({route: {params}}: {route: {params: TextInputOverlayInterface}}) => {
    return <TextInputOverlay {...params} />;
  },
);
