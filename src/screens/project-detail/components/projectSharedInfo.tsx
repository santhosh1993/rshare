import {View} from 'react-native';
import React from 'react';
import {Text} from '@common/text';

export interface ProjectSharedInfo {
  userName: string;
  phoneNo?: string;
}

export const ProjectSharedInfo = (props: ProjectSharedInfo) => {
  console.log(props, "--->>>")
  return (
    <View>
      <Text>{props.userName}</Text>
      {props.phoneNo && <Text>{props.phoneNo}</Text>}
    </View>
  );
};
