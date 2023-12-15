import {TextInput} from '@common/text-input';
import React from 'react';
import {View} from 'react-native';

export const ShareInfo = ({name, phoneNo}:{name: string | undefined, phoneNo: string | undefined}) => {
  return (
    <View>
      <TextInput label="Name" inputBarProps={{editable: false, value: name}} />
      <TextInput label="Phone No" inputBarProps={{editable: false, value: phoneNo}} />
    </View>
  );
};
