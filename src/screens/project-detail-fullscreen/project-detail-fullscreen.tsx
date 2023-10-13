import {View} from 'react-native';
import React, {useCallback, useRef} from 'react';
import {Routes} from '@src/root/router/routes';
import {withScreenLoadedEvent} from '@src/core/withScreenLoadedEvent';
import {ProjectDetailFullScreenInterface} from './project-detail-fullscreen.interface';
import {Header} from '@common/header';
import {colors} from '@common/colors';
import {useProjectDetailStore} from '../project-detail/project-detail.store';
import {Image, ImageLoadType} from '@common/image';
import {FlatList} from 'react-native-gesture-handler';
import {ContentData} from '../project-detail/project-detail.interface';
import {window} from '@common/constants';

const ProjectDetailFullScreen = ({
  sectionIndex,
  contentIndex,
}: ProjectDetailFullScreenInterface) => {
  const sectionData = useProjectDetailStore.getState().data[sectionIndex];

  const renderItem = useCallback(({item}: {item: ContentData}) => {
    return (
      <View style={{width: window.width, height: '100%'}}>
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

  return (
    <View style={{flex: 1, backgroundColor: colors.app.background}}>
      <Header title={sectionData.title} />
      <FlatList
        ref={flatListRef}
        style={{flex: 1}}
        data={sectionData.content}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item.id + index}
      />
    </View>
  );
};

export const ProjectDetailFullScreenComponent = withScreenLoadedEvent(
  Routes.PROJECTDETAIL,
  ({route: {params}}: {route: {params: ProjectDetailFullScreenInterface}}) => {
    return <ProjectDetailFullScreen {...params} />;
  },
);
