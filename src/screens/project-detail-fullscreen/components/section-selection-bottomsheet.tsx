import {renderBackdrop} from '@common/bottomSheetbackdrop';
import {Button, ButtonType} from '@common/button';
import {colors} from '@common/colors';
import {window} from '@common/constants';
import {FontSize} from '@common/font';
import {Seperator} from '@common/seperator';
import {FontWeight, Text} from '@common/text';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import SvgCross from '@src/generated/assets/svgs/Cross';
import SvgTickFill from '@src/generated/assets/svgs/TickFill';
import {SectionData} from '@src/screens/project-detail/project-detail.interface';
import {useProjectDetailStore} from '@src/screens/project-detail/project-detail.store';
import React, {useCallback, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';

export const SectionSelectionBottomSheet = ({
  selectedIndex,
  onClose,
}: {
  selectedIndex: number;
  onClose: (index?: number) => void;
}) => {
  const sectionData = useProjectDetailStore.getState().data;
  const [selectedIdx, setSelectedIdx] = useState(selectedIndex);
  const onCloseTap = useCallback(
    (index?: number) => {
      if (index !== undefined) {
        setSelectedIdx(index);
      }
      bottomSheetRef.current?.close();
      setTimeout(() => {
        onClose(index);
      }, 300);
    },
    [onClose],
  );

  const renderItem = useCallback(
    ({item, index}: {item: SectionData; index: number}) => {
      return (
        <Button
          type={ButtonType.Button}
          onPress={() => {
            onCloseTap(index);
          }}
          style={styles.listItem}>
          <Text style={styles.listTitle}>{item.title}</Text>
          {selectedIdx === index && (
            <SvgTickFill style={styles.listTickImage} />
          )}
        </Button>
      );
    },
    [onCloseTap, selectedIdx],
  );

  const bottomSheetRef = useRef<BottomSheet>(null);

  const header = useCallback(() => {
    return (
      <>
        <View style={styles.headerContainer}>
          <Button
            type={ButtonType.Button}
            onPress={() => {
              onCloseTap();
            }}
            style={styles.crossButton}>
            <SvgCross style={styles.crossImage} />
          </Button>
          <Text style={styles.headerTitle} fontWeight={FontWeight.BOLD}>
            Categories
          </Text>
        </View>
        <Seperator />
      </>
    );
  }, [onCloseTap]);

  const itemSeparatorComponent = useCallback(() => {
    return <Seperator />;
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[window.height * 0.4]}
      enablePanDownToClose={true}
      enableHandlePanningGesture={true}
      onClose={onClose}
      backdropComponent={renderBackdrop}
      handleComponent={header}>
      <BottomSheetFlatList
        style={{backgroundColor: colors.app.background}}
        data={sectionData}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparatorComponent}
      />
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  headerContainer: {height: 50, alignItems: 'center', justifyContent: 'center'},
  crossButton: {
    position: 'absolute',
    left: 12,
    width: 40,
    top: 0,
    bottom: 0,
    alignContent: 'center',
    justifyContent: 'center',
  },
  crossImage: {width: 16, height: 16},
  headerTitle: {
    fontSize: FontSize.large,
    fontWeight: '700',
  },
  listItem: {
    padding: 8,
    height: 55,
    justifyContent: 'center',
    backgroundColor: colors.app.cardBackground,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listTitle: {flex: 1},
  listTickImage: {width: 20, height: 20},
});
