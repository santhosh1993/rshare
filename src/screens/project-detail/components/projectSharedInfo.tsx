import {View} from 'react-native';
import React from 'react';
import {Text} from '@common/text';

export interface ProjectSharedInfo {
  name: string;
  phoneNo?: string;
}

export const ProjectSharedInfo = (props: ProjectSharedInfo) => {
  return (
    <View>
      <Text>{props.name}</Text>
      {props.phoneNo && <Text>{props.phoneNo}</Text>}
    </View>
  );
};
