import {StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import DocumentPicker from 'react-native-document-picker';
import {Button, ButtonType} from '@common/button';
import {useFiles} from '../hooks/useSaveFiles';
import {useCreateProjectStore} from '../create-project.store';

export const AddFiles = ({index}: {index: number}) => {
  const {resize} = useFiles();
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
      <View style={styles.addPick} />
    </Button>
  );
};

const styles = StyleSheet.create({
  addPick: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 40,
    height: 40,
    backgroundColor: 'green',
  },
});
