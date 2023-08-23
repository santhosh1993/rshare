import {TextInput} from '@common/text-input';
import React, {FC, useCallback} from 'react';
import {FlatList, StyleProp, ViewStyle} from 'react-native';

interface IDDetailContentProps {
  style?: StyleProp<ViewStyle>;
}

interface IDDetailContentItem {
  title: string;
}

export const IDDetailContent: FC<IDDetailContentProps> = ({style}) => {
  const data: Array<IDDetailContentItem> = [{title: 'Santhosh'}];
  const renderItem = useCallback(() => {
    return <TextInput />;
  }, []);
  return <FlatList style={style} data={data} renderItem={renderItem} />;
};
