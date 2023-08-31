import {TextInput} from '@common/text-input';
import React, {FC, useCallback, useMemo} from 'react';
import {FlatList, StyleProp, View, ViewStyle} from 'react-native';

interface IDDetailContentProps {
  style?: StyleProp<ViewStyle>;
}

interface IDDetailContentItem {
  title: string;
}

export const IDDetailContent: FC<IDDetailContentProps> = ({style}) => {
  const data: Array<IDDetailContentItem> = [
    {title: 'Santhosh :'},
    {title: 'Santhosh2 :'},
    {title: 'Santhosh3 :'},
    {title: 'Santhosh4 :'},
    {title: 'Santhosh :'},
    {title: 'Santhosh2 :'},
    {title: 'Santhosh3 :'},
    {title: 'Santhosh4 :'},
    {title: 'Santhosh :'},
    {title: 'Santhosh2 :'},
    {title: 'Santhosh3 :'},
    {title: 'Santhosh4 :'},
  ];

  const keyExtracter = useCallback(
    (item: IDDetailContentItem, index: number) => {
      return index.toString() ?? '';
    },
    [],
  );

  const renderItem = useCallback(({item}: {item: IDDetailContentItem}) => {
    return (
      <TextInput
        label={item.title}
        inputBarProps={{defaultValue: 'dsny', placeholder: 'safa'}}
      />
    );
  }, []);

  const footer = useMemo(() => {
    return <View style={{height: 60}} />;
  }, []);

  return (
    <FlatList
      style={style}
      data={data}
      keyExtractor={keyExtracter}
      renderItem={renderItem}
      ListFooterComponent={footer}
    />
  );
};
