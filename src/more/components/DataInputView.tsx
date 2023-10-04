import {TextInput} from '@common/text-input';
import {memo} from 'react';
import {View} from 'react-native';

export const DataInputView = memo(() => {
  return (
    <View>
      <TextInput label="Name" />
      <TextInput label="Phone No" />
    </View>
  );
});
