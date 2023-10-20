import {Accordian} from '@common/accordian';
import {TextInput} from '@common/text-input';
import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useCreateProjectStore} from '../create-project.store';
import {ContentData} from '@src/screens/project-detail/project-detail.interface';
import {shadow} from '@common/shadow.styles';
import {border} from '@common/border.styles';
import {window} from '@common/constants';
import {Image, ImageLoadType} from '@common/image';
import {colors} from '@common/colors';
import {Text} from '@common/text';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AddFiles} from './add-files';

export interface ProjectTabContentInterface {
  index: number;
}

export const ProjectTabContent = ({index}: ProjectTabContentInterface) => {
  const data = useCreateProjectStore(s => s.data)[index].content;

  const seperaterItem = useCallback(() => {
    return <View style={styles.seperator} />;
  }, []);

  const keyExtractor: (item: ContentData, index: number) => string =
    useCallback((item, index) => {
      return index + item.id;
    }, []);

  const renderItem = useCallback(({item}: {item: ContentData}) => {
    return (
      <View style={[styles.card, shadow.container, border.card]}>
        <Image
          type={ImageLoadType.fastImage}
          props={{
            style: {flex: 1},
            source: {
              uri: item.url,
            },
          }}
        />
      </View>
    );
  }, []);
  const {bottom} = useSafeAreaInsets();
  const [show, setShow] = useState(true);
  const onScroll = useCallback(() => {
    setShow(false);
  }, []);
  const onMomentumScrollEnd = useCallback(() => {
    setShow(true);
  }, []);
  const listFooterComponent = useCallback(() => {
    return <View style={{height: 80}} />;
  }, []);

  return (
    <View style={{flex: 1}}>
      <Accordian title={'Details'}>
        <TextInput label="Tab Title" />
        <TextInput label="Tab Description" />
      </Accordian>
      <FlatList
        style={[styles.contentList, {paddingBottom: bottom + 8}]}
        data={data}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={seperaterItem}
        columnWrapperStyle={styles.wrapperStyle}
        onScroll={onScroll}
        onMomentumScrollEnd={onMomentumScrollEnd}
        ListFooterComponent={listFooterComponent}
      />
      {show && <AddFiles />}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: (window.width - 28) / 3,
    height: ((window.width - 28) / 3) * 1.3,
    backgroundColor: 'green',
    overflow: 'hidden',
  },
  contentList: {flex: 1, backgroundColor: colors.app.background, padding: 8},
  seperator: {height: 4, backgroundColor: 'transparent'},
  wrapperStyle: {justifyContent: 'space-around'},
});
