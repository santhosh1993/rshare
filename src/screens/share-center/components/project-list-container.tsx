import {
  ShareCard,
  ShareCardInterface,
} from '@src/components/shareCard/shareCard';
import {useCallback, useEffect} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import React from 'react';
import {DeviceEventEmitter, View} from 'react-native';
import {useShareCenterStore} from '../share-center.store';

export const ProjectListContainer = () => {
  const data = useShareCenterStore(s => s.data);
  const updateData = useShareCenterStore(s => s.updateData);

  useEffect(() => {
    const eventListener = DeviceEventEmitter.addListener(
      'rconListDataUpdated',
      () => {
        updateData();
      },
    );

    return () => {
      eventListener.remove();
    };
  }, []);

  const renderItem = useCallback(({item}: {item: ShareCardInterface}) => {
    return <ShareCard {...item} />;
  }, []);

  const seperator = useCallback(() => <View style={{height: 8}} />, []);
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
