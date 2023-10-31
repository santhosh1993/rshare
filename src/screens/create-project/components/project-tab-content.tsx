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
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AddFiles} from './add-files';
import {Accordion} from '@src/components/Accordion';
import {AccordionBody} from '@src/components/Accordion/AccordionBody';
import {AccordionHead} from '@src/components/Accordion/AccordionHead';
import {FontWeight, Text} from '@common/text';
import {FontSize} from '@common/font';
import {AccordionIconAnimationType} from '@src/components/Accordion/Accordion.interface';
import {AccordionIcon} from '@src/components/Accordion/AccordionIcon';
import SvgChevronDown from '@src/generated/assets/svgs/ChevronDown';
import {InputType} from '../create-project.interface';

export interface ProjectTabContentInterface {
  index: number;
}

export const ProjectTabContent = ({index}: ProjectTabContentInterface) => {
  const data = useCreateProjectStore(s => s.data)[index];

  const seperaterItem = useCallback(() => {
    return <View style={styles.seperator} />;
  }, []);

  const keyExtractor: (item: ContentData, index: number) => string =
    useCallback((item, index) => {
      return index + item.id;
    }, []);

  const renderItem = useCallback(
    ({item, index}: {item: ContentData; index: number}) => {
      return (
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
      );
    },
    [],
  );
  const {bottom} = useSafeAreaInsets();
  const [show, setShow] = useState(true);
  const onScroll = useCallback(() => {
    setShow(false);
  }, []);
  const onMomentumScrollEnd = useCallback(() => {
    setShow(true);
  }, []);
  const listFooterComponent = useCallback(() => {
    return <View style={styles.footer} />;
  }, []);

  const updateText = useCreateProjectStore(s => s.updateText);

  const titleUpdate = useCallback(
    (text: string) => {
      updateText(InputType.sectionTitle, text, index);
    },
    [index, updateText],
  );

  const descriptionUpdate = useCallback(
    (text: string) => {
      updateText(InputType.sectionDescription, text, index);
    },
    [index, updateText],
  );

  return (
    <View style={styles.container}>
      <Accordion style={styles.accordion}>
        <Accordion.Item id={'category_detail_' + index} initialExpand={true}>
          <AccordionHead style={styles.accordionHead}>
            <Text
              fontWeight={FontWeight.MEDIUM}
              style={{fontSize: FontSize.medium}}>
              Categrory Details
            </Text>
            <AccordionIcon
              animationType={AccordionIconAnimationType.ROTATION}
              children={
                <View style={styles.accordionIcon}>
                  <SvgChevronDown />
                </View>
              }
            />
          </AccordionHead>
          <AccordionBody>
            <TextInput
              label="Title"
              inputBarProps={{value: data.title, onChangeText: titleUpdate}}
            />
            <TextInput
              label="Description"
              inputBarProps={{
                onChangeText: descriptionUpdate,
                multiline: true,
                maxLength: 256,
                value: data.description,
              }}
            />
          </AccordionBody>
        </Accordion.Item>
      </Accordion>
      <FlatList
        style={[styles.contentList, {paddingBottom: bottom + 8}]}
        data={data.content}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={seperaterItem}
        columnWrapperStyle={styles.wrapperStyle}
        onScroll={onScroll}
        onMomentumScrollEnd={onMomentumScrollEnd}
        ListFooterComponent={listFooterComponent}
      />
      {show && <AddFiles index={index} />}
    </View>
  );
};

const styles = StyleSheet.create({
  cardMargin: {marginLeft: 8},
  container: {flex: 1},
  accordion: {backgroundColor: '#fff'},
  card: {
    width: (window.width - 32) / 3,
    height: ((window.width - 32) / 3) * 1.35,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  contentList: {flex: 1, backgroundColor: colors.app.background, padding: 8},
  seperator: {height: 8, backgroundColor: 'transparent'},
  wrapperStyle: {justifyContent: 'flex-start'},
  footer: {height: 80},
  accordionHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
  accordionIcon: {width: 16, height: 16},
});
