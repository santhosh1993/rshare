import {Button, ButtonType} from '@common/button';
import {Text} from '@common/text';
import React, {FC, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';

export enum SectionHeaderMode {
  viewMode,
  editMode,
}

export enum Action {
  add,
  acordian,
}

export interface SectionHeaderProps {
  index: number;
  title: string;
  mode?: SectionHeaderMode;
  onTap?: (props: SectionHeaderProps, action: Action) => void;
}

export const SectionHeader: FC<SectionHeaderProps> = props => {
  const onTap = useCallback(() => {
    props.onTap?.(props, Action.acordian);
  }, [props]);

  return (
    <Button type={ButtonType.Button} onPress={onTap}>
      <View style={styles.textContainer}>
        <Text>{props.title}</Text>
      </View>
    </Button>
  );
};

const styles = StyleSheet.create({
  textContainer: {backgroundColor: 'red'},
});
