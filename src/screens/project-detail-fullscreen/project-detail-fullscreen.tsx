import {View} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Routes} from '@src/root/router/routes';
import {withScreenLoadedEvent} from '@src/core/withScreenLoadedEvent';
import {ProjectDetailFullScreenInterface} from './project-detail-fullscreen.interface';
import {Header} from '@common/header';
import {useProjectDetailStore} from '../project-detail/project-detail.store';
import {Image, ImageLoadType} from '@common/image';
import {FlatList} from 'react-native-gesture-handler';
import {ContentData} from '../project-detail/project-detail.interface';
import {Button, ButtonType} from '@common/button';
import SvgFilter from '@src/generated/assets/svgs/Filter';
import {styles} from './project-detail-fullscreen.styles';
import {SectionSelectionBottomSheet} from './components/section-selection-bottomsheet';

const ProjectDetailFullScreen = ({
  sectionIndex,
  contentIndex,
}: ProjectDetailFullScreenInterface) => {
  const [sectionData, setSectionData] = useState(
    useProjectDetailStore.getState().data[sectionIndex],
  );
  const [showFilterBottomSheet, setShowFilterBottomSheet] = useState(false);
  const renderItem = useCallback(({item}: {item: ContentData}) => {
    return (
      <View style={styles.renderItemContainer}>
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
    );
  }, []);

  const flatListRef = useRef<FlatList>(null);

  const onFilterTap = useCallback(() => {
    setShowFilterBottomSheet(true);
  }, []);

  const rightBarItem = useMemo(() => {
    return (
      <Button
        type={ButtonType.Button}
        style={styles.filterItem}
        onPress={onFilterTap}>
        <SvgFilter style={styles.filterImage} fill={'#000'} />
      </Button>
    );
  }, [onFilterTap]);

  const scrollToIndex = useCallback((index: number) => {
    flatListRef.current?.scrollToIndex({
      index: index,
      animated: false,
    });
  }, []);

  useEffect(() => {
    scrollToIndex(contentIndex);
  }, [contentIndex, scrollToIndex]);

  const onClose = useCallback((index?: number) => {
    setShowFilterBottomSheet(false);
    if (index !== undefined) {
      flatListRef.current?.scrollToIndex({index: 0, animated: false});
      setSectionData(useProjectDetailStore.getState().data[index]);
    }
  }, []);

  return (
    <View style={styles.parentContainer}>
      <Header title={sectionData.title} rightBarItem={rightBarItem} />
      <FlatList
        onScrollToIndexFailed={({index}) => {
          setTimeout(() => {
            scrollToIndex(index);
          }, 200);
        }}
        ref={flatListRef}
        style={styles.flatList}
        data={sectionData.content}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item.id + index}
      />
      {showFilterBottomSheet && (
        <SectionSelectionBottomSheet
          onClose={onClose}
          selectedIndex={sectionData.index}
        />
      )}
    </View>
  );
};

export const ProjectDetailFullScreenComponent = withScreenLoadedEvent(
  Routes.PROJECTDETAIL,
  ({route: {params}}: {route: {params: ProjectDetailFullScreenInterface}}) => {
    return <ProjectDetailFullScreen {...params} />;
  },
);
