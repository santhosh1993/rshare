import {View} from 'react-native';
import React from 'react';
import {Text} from '@common/text';

export interface ProjectSharedInfo {
  userName: string;
  phoneNo?: string;
  rconDescription?: string;
}

export const ProjectSharedInfo = (props: ProjectSharedInfo) => {
  return (
    <View>
      {props.rconDescription && <Text>{props.rconDescription}</Text>}
      <Text>{props.userName}</Text>
      {props.phoneNo && <Text>{props.phoneNo}</Text>}
    </View>
  );
};
