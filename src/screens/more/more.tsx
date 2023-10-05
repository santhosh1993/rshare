import React, {FC, memo} from 'react';
import {styles} from './more.styles';
import {View} from 'react-native';
import {DataInputView} from './components/DataInputView';
import {FeedBackButton} from './components/Feedback';
import {Header} from '@common/header';
import {UpdateButton} from './components/UpdateButton';

export interface MoreInterface {}

export const More: FC<MoreInterface> = memo(() => {
  return (
    <View style={styles.moreContainer}>
      <View style={styles.nonLoginParent}>
        <Header title={'More'} />
        <DataInputView />
        <UpdateButton />
      </View>
      <FeedBackButton />
    </View>
  );
});
