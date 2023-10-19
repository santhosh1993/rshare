import {TextInput} from '@common/text-input';
import React from 'react';
import {Accordian} from '@common/accordian';
import {shadow} from '@common/shadow.styles';
import {border} from '@common/border.styles';

export const ProjectDetailsInput = () => {
  return (
    <Accordian title={''} style={[{marginTop: 8}, shadow.container]}>
      <TextInput label="Title" />
      <TextInput label="Details" />
      <TextInput label="Key words" />
    </Accordian>
  );
};
