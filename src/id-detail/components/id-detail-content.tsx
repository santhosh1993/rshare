import {TextInput} from '@common/text-input';
import React, {FC, useCallback, useMemo} from 'react';
import {FlatList, StyleProp, ViewStyle} from 'react-native';

interface IDDetailContentProps {
  style?: StyleProp<ViewStyle>;
}

interface IDDetailContentItem {
  title: string;
}

export const IDDetailContent: FC<IDDetailContentProps> = ({style}) => {
  const data: Array<IDDetailContentItem> = [
    {title: 'Santhosh'},
    {title: 'Santhosh2 :'},
    {title: 'Santhosh3'},
    {title: 'Santhosh4'},
  ];
  const renderItem = useCallback(({item}: {item: IDDetailContentItem}) => {
    return (
      <TextInput
        label={item.title}
        inputBarProps={{defaultValue: 'dsny', placeholder: 'safa'}}
      />
    );
  }, []);
  return <FlatList style={style} data={data} renderItem={renderItem} />;
};
