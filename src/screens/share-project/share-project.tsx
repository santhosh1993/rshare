import React, {FC} from 'react';
import {View} from 'react-native';
import {ShareProjectInterface} from './share-project.interface';
import {Header} from '@common/header';

export const ShareProject: FC<ShareProjectInterface> = () => {
  return (
    <View style={{flex: 1}}>
      <Header title={'Share RCON'} />
    </View>
  );
};
