import {TextInput} from '@common/text-input';
import React from 'react';
import {Accordion} from '@src/components/Accordion';
import {AccordionHead} from '@src/components/Accordion/AccordionHead';
import {AccordionBody} from '@src/components/Accordion/AccordionBody';
import {Text} from '@common/text';

export const ProjectDetailsInput = () => {
  return (
    <Accordion style={{backgroundColor: '#fff'}}>
      <Accordion.Item id={'Project_detail'} initialExpand={true}>
        <AccordionHead>
          <Text>Project Detail</Text>
        </AccordionHead>
        <AccordionBody>
          <TextInput label="Title" />
          <TextInput label="Details" />
          <TextInput label="Key words" inputBarProps={{multiline: true}} />
        </AccordionBody>
      </Accordion.Item>
    </Accordion>
  );
};
