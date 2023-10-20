import {Accordian} from '@common/accordian';
import {TextInput} from '@common/text-input';
import React from 'react';
import {View} from 'react-native';

export const ProjectTabContent = () => {
  return (
    <View style={{flex: 1}}>
      <Accordian title={''}>
        <TextInput label="Tab Title" />
        <TextInput label="Tab Description" />
      </Accordian>
    </View>
  );
};
