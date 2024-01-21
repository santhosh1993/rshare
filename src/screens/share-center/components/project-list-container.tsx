import {
  ShareCard,
  ShareCardInterface,
} from '@src/components/shareCard/shareCard';
import {useCallback} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import { shareCenterStore } from '../share-center.store';

export const ProjectListContainer = () => {
  const data = shareCenterStore(s => s.data)
  console.log(data, '-->>>');
  const renderItem = useCallback(({item}: {item: ShareCardInterface}) => {
    return <ShareCard {...item} />;
  }, []);

  const seperator = useCallback(() => <View style={{height: 8}} />, [])
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={seperator}
      ListHeaderComponent={seperator}
      ListFooterComponent={seperator}
    />
  );
};
