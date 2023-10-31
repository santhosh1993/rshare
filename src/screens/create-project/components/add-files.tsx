import {StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import DocumentPicker from 'react-native-document-picker';
import {Button, ButtonType} from '@common/button';
import {useCreateProjectStore} from '../create-project.store';
import SvgAttachment from '@src/generated/assets/svgs/Attachment';
import {colors} from '@common/colors';
import {shadow} from '@common/shadow.styles';

export const AddFiles = ({index}: {index: number}) => {
  const addNewContent = useCreateProjectStore(s => s.addNewContent);
  const pickDocument = useCallback(async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        allowMultiSelection: true,
      });

      console.log(result, ' ----->>>>', index);
      addNewContent(result, index);
      //resize(result[0].uri);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the document picker
      } else {
        throw err;
      }
    }
  }, [addNewContent, index]);

  return (
    <Button type={ButtonType.Button} onPress={pickDocument}>
      <View style={[styles.addPick, shadow.container]}>
        <SvgAttachment />
      </View>
    </Button>
  );
};

const styles = StyleSheet.create({
  addPick: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    width: 50,
    height: 50,
    padding: 12,
    backgroundColor: colors.app.fabBackground,
    borderRadius: 30,
  },
});
