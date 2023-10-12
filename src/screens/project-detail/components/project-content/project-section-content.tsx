import {StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import {Text} from '@common/text';
import {FlatList} from 'react-native-gesture-handler';
import {ContentData, SectionData} from '../../project-detail.interface';
import {window} from '@common/constants';
import {shadow} from '@common/shadow.styles';
import {border} from '@common/border.styles';
import {Image, ImageLoadType} from '@common/image';
import {colors} from '@common/colors';

export const ProjectSectionContent = ({content, description}: SectionData) => {
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

  const seperaterItem = useCallback(() => {
    return <View style={styles.seperator} />;
  }, []);

  const keyExtractor: (item: ContentData, index: number) => string =
    useCallback((item, index) => {
      return index + item.id;
    }, []);

  return (
    <>
      {description !== undefined && (
        <Text style={styles.textDescription}>{description}</Text>
      )}
      <FlatList
        style={styles.contentList}
        data={content}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={seperaterItem}
        columnWrapperStyle={styles.wrapperStyle}
      />
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    width: (window.width - 28) / 3,
    height: ((window.width - 28) / 3) * 1.3,
    backgroundColor: 'green',
    overflow: 'hidden',
  },
  imageContainer: {},
  wrapperStyle: {justifyContent: 'space-around'},
  contentList: {flex: 1, backgroundColor: colors.app.background, padding: 8},
  textDescription: {padding: 8, paddingVertical: 12, paddingBottom: 4},
  seperator: {height: 4, backgroundColor: 'transparent'},
});
