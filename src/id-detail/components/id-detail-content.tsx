import {TextInput} from '@common/text-input';
import React, {FC, useCallback, useMemo} from 'react';
import {FlatList, StyleProp, View, ViewStyle} from 'react-native';

interface IDDetailContentProps {
  style?: StyleProp<ViewStyle>;
}

interface IDDetailContentItem {
  title: string;
  placeHolder?: string;
  maxLength?: number;
}

export const IDDetailContent: FC<IDDetailContentProps> = ({style}) => {
  const data: Array<IDDetailContentItem> = [
    {title: 'Project Name', placeHolder: 'Project Name', maxLength: 100},
    {
      title: 'Key words',
      placeHolder: 'Key words of the property',
      maxLength: 250,
    },
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
        label={item.title + ' :'}
        inputBarProps={{
          placeholder: item.placeHolder,
          maxLength: item.maxLength,
        }}
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
