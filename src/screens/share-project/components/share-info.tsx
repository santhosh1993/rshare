import {TextInput} from '@common/text-input';
import React from 'react';
import {View} from 'react-native';

export const ShareInfo = () => {
  return (
    <View>
      <TextInput label="Name" inputBarProps={{editable: false}} />
      <TextInput label="Phone No" inputBarProps={{editable: false}} />
    </View>
  );
};
