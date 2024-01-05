import {Button, ButtonType} from '@common/button';
import {View} from 'react-native';
import React from 'react';

export const ShareCta = ({onShareTap, onPreviewTap}: {onShareTap: () => void, onPreviewTap: () => void}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Button
        type={ButtonType.SecondaryButton}
        props={{
          label: 'Preview',
          style: {marginHorizontal: 6, marginLeft: 12},
        }}
        style={{flex: 1}}
        onPress={onPreviewTap}
      />
      <Button
        type={ButtonType.PrimaryButton}
        props={{
          label: 'Share',
          style: {marginHorizontal: 6, marginRight: 12},
        }}
        style={{flex: 1}}
        onPress={onShareTap}
      />
    </View>
  );
};
