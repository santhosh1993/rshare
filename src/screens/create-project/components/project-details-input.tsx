import {TextInput} from '@common/text-input';
import React, {useCallback} from 'react';
import {Accordion} from '@src/components/Accordion';
import {AccordionHead} from '@src/components/Accordion/AccordionHead';
import {AccordionBody} from '@src/components/Accordion/AccordionBody';
import {FontWeight, Text} from '@common/text';
import {AccordionIcon} from '@src/components/Accordion/AccordionIcon';
import SvgChevronDown from '@src/generated/assets/svgs/ChevronDown';
import {AccordionIconAnimationType} from '@src/components/Accordion/Accordion.interface';
import {StyleSheet, View} from 'react-native';
import {FontSize} from '@common/font';
import {useCreateProjectStore} from '../create-project.store';
import {InputType} from '../create-project.interface';

export const ProjectDetailsInput = () => {
  const {updateText, details} = useCreateProjectStore(s => {
    return {updateText: s.updateText, details: s.details};
  });
  const titleUpdate = useCallback(
    (text: string) => {
      updateText(InputType.title, text);
    },
    [updateText],
  );

  const detailsUpdate = useCallback(
    (text: string) => {
      updateText(InputType.description, text);
    },
    [updateText],
  );

  const keyWordsUpdate = useCallback(
    (text: string) => {
      updateText(InputType.keywords, text);
    },
    [updateText],
  );
  return (
    <Accordion style={styles.accordion}>
      <Accordion.Item id={'Project_detail'} initialExpand={true}>
        <AccordionHead style={styles.head}>
          <Text fontWeight={FontWeight.BOLD} style={{fontSize: FontSize.large}}>
            Project Detail
          </Text>
          <AccordionIcon
            animationType={AccordionIconAnimationType.ROTATION}
            children={
              <View style={styles.dropDown}>
                <SvgChevronDown />
              </View>
            }
          />
        </AccordionHead>
        <AccordionBody>
          <TextInput
            label="Title"
            inputBarProps={{onChangeText: titleUpdate, value: details.title}}
          />
          <TextInput
            label="Details"
            inputBarProps={{
              onChangeText: detailsUpdate,
              value: details.descrption,
            }}
          />
          <TextInput
            label="Key words"
            inputBarProps={{
              multiline: true,
              onChangeText: keyWordsUpdate,
              value: details.keywords,
              maxLength: 256,
            }}
          />
        </AccordionBody>
      </Accordion.Item>
    </Accordion>
  );
};

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
  accordion: {backgroundColor: '#fff'},
  dropDown: {width: 16, height: 16},
});
