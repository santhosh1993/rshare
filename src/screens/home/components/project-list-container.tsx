import {
  ShareCard,
  ShareCardInterface,
} from '@src/components/shareCard/shareCard';
import {useCallback} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';

export const ProjectListContainer = () => {
  const data: Array<ShareCardInterface> = [{}, {}];
  const renderItem = useCallback(({item}: {item: ShareCardInterface}) => {
    return <ShareCard {...item} />;
  }, []);
  return (
    <FlatList
      style={{paddingVertical: 8}}
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={{height: 8}} />}
    />
  );
};
