import {StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import {FontWeight, Text} from '@common/text';
import {FlatList} from 'react-native-gesture-handler';
import {ContentData, SectionData} from '../../project-detail.interface';
import {window} from '@common/constants';
import {shadow} from '@common/shadow.styles';
import {border} from '@common/border.styles';
import {Image, ImageLoadType} from '@common/image';
import {colors} from '@common/colors';
import {Button, ButtonType} from '@common/button';
import {useNavigation} from '@src/root/navigation/useNavigation';
import {Routes} from '@src/root/router/routes';

export const ProjectSectionContent = ({
  data,
  sectionIndex,
}: {
  data: SectionData;
  sectionIndex: number;
}) => {
  const nav = useNavigation();

  const onItemTap = useCallback(
    (index: number) => {
      nav.global.navigate({
        route: Routes.PROJECTDETAILFULLSCREEN,
        params: {sectionIndex: sectionIndex, contentIndex: index},
      });
    },
    [nav.global, sectionIndex],
  );

  const renderItem = useCallback(
    ({item, index}: {item: ContentData; index: number}) => {
      return (
        <Button
          type={ButtonType.Button}
          onPress={() => {
            onItemTap(index);
          }}>
          <View
            style={[
              styles.card,
              shadow.container,
              border.card,
              index % 3 !== 0 && styles.cardMargin,
            ]}>
            <Image
              type={ImageLoadType.fastImage}
              props={{
                style: {flex: 1},
                source: {
                  uri: item.url,
                },
                resizeMode: 'contain',
              }}
            />
          </View>
        </Button>
      );
    },
    [onItemTap],
  );

  const seperaterItem = useCallback(() => {
    return <View style={styles.seperator} />;
  }, []);

  const keyExtractor: (item: ContentData, index: number) => string =
    useCallback((item, index) => {
      return index + item.id;
    }, []);

  return (
    <>
      {data.description !== undefined && (
        <Text
          style={[shadow.container, styles.textDescription]}
          fontWeight={FontWeight.MEDIUM}>
          {data.description}
        </Text>
      )}
      <FlatList
        style={styles.contentList}
        data={data.content}
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
  cardMargin: {marginLeft: 8},
  card: {
    width: (window.width - 28) / 3,
    height: ((window.width - 28) / 3) * 1.3,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  imageContainer: {},
  wrapperStyle: {justifyContent: 'flex-start'},
  contentList: {flex: 1, backgroundColor: colors.app.background, padding: 8},
  textDescription: {
    marginTop: 4,
    padding: 8,
    paddingVertical: 12,
    paddingBottom: 4,
    backgroundColor: 'white',
    fontSize: 16,
  },
  seperator: {height: 8, backgroundColor: 'transparent'},
});
