import {Button, ButtonType} from '@common/button';
import {StyleSheet, View} from 'react-native';
import React, {useMemo} from 'react';

export const ShareCta = ({
  onShareTap,
  onPreviewTap,
}: {
  onShareTap: () => void;
  onPreviewTap: () => void;
}) => {
  const previewProps = useMemo(() => {
    return {
      label: 'Preview',
      style: {marginHorizontal: 6, marginLeft: 12},
    };
  }, []);

  const shareProps = useMemo(() => {
    return {
      label: 'Share',
      style: {marginHorizontal: 6, marginRight: 12},
    };
  }, []);

  return (
    <View style={styles.container}>
      <Button
        type={ButtonType.SecondaryButton}
        props={previewProps}
        style={styles.button}
        onPress={onPreviewTap}
      />
      <Button
        type={ButtonType.PrimaryButton}
        props={shareProps}
        style={styles.button}
        onPress={onShareTap}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {flex: 1},
  container: {flexDirection: 'row'},
});
